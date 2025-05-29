import Cookies from "js-cookie";
import { loadFromLS, saveToLS } from "../../../../assets/js/localStorage";
import {
  create,
  dateEnUS,
  dateZhCN,
  enUS,
  NConfigProvider,
  NDivider,
  NFlex,
  NInput,
  NInputGroup,
  NInputGroupLabel,
  NInputNumber,
  NPopover,
  NSelect,
  NTimePicker,
  zhCN,
} from "naive-ui";
import { computed, createApp, ref, watch } from "vue";

const filament_prefixes = [
  { label: "T0 - Tranquil", value: "Tranquil" },
  { label: "T1 - Calm", value: "Calm" },
  { label: "T2 - Agitated", value: "Agitated" },
  { label: "T3 - Fierce", value: "Fierce" },
  { label: "T4 - Raging", value: "Raging" },
  { label: "T5 - Chaotic", value: "Chaotic" },
  { label: "T6 - Cataclysmic", value: "Cataclysmic" },
];
const filament_types = [
  { label: "Electrical", value: "Electrical" },
  { label: "Dark", value: "Dark" },
  { label: "Exotic", value: "Exotic" },
  { label: "Firestorm", value: "Firestorm" },
  { label: "Gamma", value: "Gamma" },
];
interface FilamentPrice {
  name: string;
  price?: any;
  id?: number;
}

const order_types = [
  { label: "卖单", value: "sell" },
  { label: "买单", value: "buy" },
];
const strat_types = [
  { label: "最大", value: "max" },
  { label: "中位数", value: "median" },
  { label: "最小", value: "min" },
  { label: "百分位数", value: "percentile" },
  { label: "标准差", value: "stddev" },
  { label: "加权平均数", value: "weightedAverage" },
];
const time2min = (s: string) =>
  s.split(":").reduce((acc, curr) => acc * 60 + +curr, 0);
const min2time = (m: number) =>
  `${Number.isInteger(m) ? " " : "~"}${String(Math.floor(m / 60)).padStart(2, "0")}:${String(Math.round(m) % 60).padStart(2, "0")}`;
const location_list = [
  { label: "Jita", value: "30000142" },
  { label: "Amarr", value: "30002187" },
];

const lang = document.documentElement.lang || "cmn";
let naiveLocale, naiveDateLocale;
if (lang.startsWith("en")) {
  naiveLocale = enUS;
  naiveDateLocale = dateEnUS;
} else {
  naiveLocale = zhCN;
  naiveDateLocale = dateZhCN;
}
const naive = create({
  components: [
    NFlex,
    NSelect,
    NInputGroup,
    NInputGroupLabel,
    NInputNumber,
    NInput,
    NTimePicker,
    NPopover,
    NConfigProvider,
  ],
});

createApp({
  setup() {
    function getFilamentPrices(location_id: string): FilamentPrice[] {
      let prices: FilamentPrice[] =
        loadFromLS(`filament-price-${location_id}`) ?? [];
      if (prices.length === 0) {
        const filament_names = filament_prefixes.flatMap((prefix) =>
          filament_types.map(
            (type) => `${prefix.value} ${type.value} Filament`,
          ),
        );
        filament_names.forEach((name) => {
          prices.push({ name: name });
        });
        $.post(
          "https://esi.evetech.net/latest/universe/ids/?datasource=tranquility&language=en",
          JSON.stringify(prices.map((item) => item.name)),
        ).done(function (data) {
          data.inventory_types.forEach((type: any) => {
            const entry = prices.find((item) => item.name === type.name);
            if (entry) {
              entry.id = type.id;
            }
          });
          $.get(
            `https://market.fuzzwork.co.uk/aggregates/?region=${location_id}&types=${prices
              .map((item) => item.id)
              .filter((id) => id !== undefined)
              .join(",")}`,
            function (data) {
              Object.entries(data).forEach(([key, value]) => {
                const entry = prices.find((item) => item.id === +key);
                if (entry) {
                  entry.price = value;
                }
              });
              saveToLS(`filament-price-${location_id}`, prices, 30 * 60 * 1000);
            },
          );
        });
      }
      return prices;
    }

    const corp_tax_rate = ref(Number(Cookies.get("corp-tax-rate") || 0));
    const sales_tax_rate = ref(
      0.075 * (1 - 0.11 * (Number(Cookies.get("accounting-skill-level")) || 5)),
    );

    const isk_income = ref();
    const loot_table = ref();
    const gross_income = computed(() => {
      return isk_income.value || 0;
    });
    const orders = ref(order_types);
    const strats = ref(strat_types);
    const locations = ref(location_list);
    const sell_location = ref("30000142");
    const sell_order = ref("buy");
    const sell_strat = ref("percentile");

    const isk_cost = ref();
    const consumed_items = ref();
    const total_cost = computed(() => {
      return (isk_cost.value || 0) + abyssal_cost.value;
    });

    const abyssal_level = ref(null);
    const abyssal_weather = ref(null);
    const abyssal_levels = ref(filament_prefixes);
    const abyssal_weathers = ref(filament_types);
    const abyssal_filament_count = ref();
    const abyssal_cost = computed(() => {
      const filament_name = `${abyssal_level.value} ${abyssal_weather.value} Filament`;
      const entry = filamentPrices.value.find(
        (item: { name: string }) => item.name === filament_name,
      );
      const price = entry?.price?.[buy_order.value]?.[buy_strat.value] || 0;
      return abyssal_filament_count.value
        ? abyssal_filament_count.value * price
        : 0;
    });
    const buy_location = ref("30000142");
    const buy_order = ref("sell");
    const buy_strat = ref("percentile");
    const start_time = ref(null);
    const end_time = ref(null);

    const filamentPrices = ref<FilamentPrice[]>(
      getFilamentPrices(buy_location.value),
    );

    watch([buy_location, buy_order, buy_strat], ([loc]) => {
      filamentPrices.value = getFilamentPrices(loc);
    });

    const total_time = computed(() => {
      if (!start_time.value || !end_time.value) {
        return "--:--";
      }
      const tStart = time2min(start_time.value || "00:00");
      const tEnd = time2min(end_time.value || "00:00");
      return min2time(
        tEnd >= tStart ? tEnd - tStart : tEnd + time2min("24:00") - tStart,
      );
    });
    const total_counts = computed(() => {
      return participants.value.reduce((acc, cur) => acc + cur.count, 0);
    });
    const total_runs = computed(() => {
      return Math.max(...participants.value.map((p) => p.run), 1);
    });
    const total_iph = computed(() => {
      return net_income.value / (time2min(total_time.value || "00:00") / 60);
    });

    const avg_time = computed(() => {
      if (!total_time.value || total_time.value === "--:--") {
        return "--:--";
      }
      const total_mins = time2min(total_time.value || "00:00");
      return min2time(total_mins / total_runs.value);
    });
    const avg_share = computed(() => {
      return updateParticipants.value.length
        ? updateParticipants.value.reduce((acc, cur) => acc + cur.share, 0) /
            updateParticipants.value.length
        : 0;
    });
    const avg_iph = computed(() => {
      return updateParticipants.value.length
        ? updateParticipants.value.reduce((acc, cur) => acc + cur.iph, 0) /
            updateParticipants.value.length
        : 0;
    });
    const avg_per_run = computed(() => {
      return total_runs.value ? net_income.value / total_runs.value : 0;
    });

    const net_income = computed(
      () =>
        gross_income.value -
        sales_tax.value -
        corp_tax.value -
        total_cost.value,
    );
    const sales_tax = computed(() => gross_income.value * sales_tax_rate.value);
    const corp_tax = computed(() => gross_income.value * corp_tax_rate.value);

    const filament_count_warning = computed(() => {
      const total_count = total_counts.value;
      const total_runs_value = total_runs.value;
      const filament_count = abyssal_filament_count.value;
      const expected_filament = [1, 2, 3]
        .filter((i) => i >= total_count)
        .map((i) => i * total_runs_value);
      if (
        filament_count > 0 &&
        expected_filament.length > 0 &&
        !expected_filament.includes(filament_count)
      ) {
        return "warning";
      } else {
        return undefined;
      }
    });

    function copyTrueValue(e: any) {
      const value = e.target.getAttribute("data-true-value");
      if (!value || value === "0") {
        console.warn("No valid value to copy");
        return;
      }

      navigator.clipboard
        .writeText(value)
        .then(() => {
          const target = e.target;
          target.classList.add("text-success");
          setTimeout(() => target.classList.remove("text-success"), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
          const target = e.target;
          target.classList.add("text-danger");
          setTimeout(() => target.classList.remove("text-danger"), 2000);
        });
    }

    interface Participant {
      name: string;
      weight: number;
      run: number;
      count: number;
      share: number;
      iph: number;
    }

    const participants = ref<Participant[]>([
      {
        name: "",
        weight: 1,
        run: 1,
        count: 1,
        share: 0,
        iph: 0,
      },
    ]);

    const updateParticipants = computed(() => {
      const total_weight = participants.value.reduce(
        (acc, p) => acc + (p.run / total_runs.value) * p.weight,
        0,
      );
      return participants.value.map((p) => {
        const adjusted_weight =
          ((p.run / total_runs.value) * p.weight) / total_weight;
        const share =
          (net_income.value * adjusted_weight) / (p.count || Infinity);
        return {
          ...p,
          share,
          iph: share / (time2min(total_time.value || "00:00") / 60) || 0,
        };
      });
    });

    function addEntry() {
      if (participants.value.length <= 20) {
        participants.value.push({
          name: "",
          weight: 1,
          run: 1,
          count: 1,
          share: 0,
          iph: 0,
        });
      }
    }

    function removeEntry() {
      if (participants.value.length > 1) {
        participants.value.pop();
      }
    }

    return {
      lang,
      naiveLocale,
      naiveDateLocale,
      participants,
      updateParticipants,
      corp_tax_rate,
      sales_tax_rate,
      isk_income,
      loot_table,
      gross_income,
      orders,
      strats,
      locations,
      sell_location,
      sell_order,
      sell_strat,
      isk_cost,
      consumed_items,
      total_cost,
      abyssal_level,
      abyssal_levels,
      abyssal_weather,
      abyssal_weathers,
      abyssal_filament_count,
      abyssal_cost,
      buy_location,
      buy_order,
      buy_strat,
      start_time,
      end_time,
      total_counts,
      total_runs,
      total_time,
      total_iph,
      avg_time,
      avg_per_run,
      avg_share,
      avg_iph,
      net_income,
      sales_tax,
      corp_tax,
      filament_count_warning,
      copyTrueValue,
      addEntry,
      removeEntry,
    };
  },
})
  .use(naive)
  .mount("#app");
