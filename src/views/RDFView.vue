<template>
  <n-grid x-gap="12" :cols="6">
    <n-gi>
      <n-statistic :label="$t('rdf.waves')" :value="waves" tabular-nums>
        <template #suffix> / 100</template>
      </n-statistic>
    </n-gi>
    <n-gi>
      <n-statistic>
        <template #label> {{ $t('rdf.total_ehp') }}<sup>*</sup> </template>
        <template #prefix>~</template>
        <n-number-animation
          ref="numberAnimationInstRef"
          :duration="1000"
          show-separator
          :from="0"
          :to="total_ehp"
        /> </n-statistic
    ></n-gi>
    <n-gi>
      <n-statistic>
        <template #label> {{ $t('rdf.isk_per_ehp') }}<sup>*</sup> </template>
        <template #prefix>~ ISK</template>
        <n-number-animation
          ref="numberAnimationInstRef"
          :duration="1000"
          show-separator
          :from="0"
          :to="isk_per_ehp"
          :precision="3"
        /> </n-statistic
    ></n-gi>
    <n-gi>
      <n-statistic :label="$t('rdf.total_loot')">
        <template #prefix>ISK</template>
        <n-number-animation
          ref="numberAnimationInstRef"
          :duration="1000"
          show-separator
          :from="0"
          :to="total_loot_value"
        />
        ({{ total_rdd }})
      </n-statistic></n-gi
    >
    <n-gi>
      <n-statistic>
        <template #label> {{ $t('rdf.total_clear_time') }}<sup>*</sup> </template>
        <template #prefix>~</template>
        <n-countdown :duration="total_clear_time * 1000" :active="false" />
      </n-statistic>
    </n-gi>
    <n-gi>
      <n-statistic>
        <template #label> {{ $t('rdf.isk_per_hour') }}<sup>*</sup> </template>
        <template #prefix>~ ISK</template>
        <n-number-animation
          ref="numberAnimationInstRef"
          :duration="1000"
          show-separator
          :from="0"
          :to="isk_per_hour"
          :precision="2"
        />
      </n-statistic>
    </n-gi>
  </n-grid>
  <n-grid x-gap="12" :cols="6">
    <n-gi>
      <n-statistic
        :label="$t('rdf.threat_tier.title')"
        :value="$t(`rdf.threat_tier.${threat_tier}`)"
      >
      </n-statistic
    ></n-gi>
    <n-gi>
      <n-statistic>
        <template #label> {{ $t('rdf.wave_ehp') }}<sup>*</sup> </template>
        <template #prefix>~</template>
        <n-number-animation
          ref="numberAnimationInstRef"
          :duration="1000"
          show-separator
          :from="0"
          :to="wave_ehp"
        /> </n-statistic
    ></n-gi>
    <n-gi>
      <n-statistic>
        <template #label> {{ $t('rdf.peak_dps') }}<sup>*</sup> </template>
        <template #prefix>~</template>
        <n-number-animation
          ref="numberAnimationInstRef"
          :duration="1000"
          show-separator
          :from="0"
          :to="peak_dps"
        /> </n-statistic
    ></n-gi>
    <n-gi>
      <n-statistic :label="$t('rdf.wave_loot')">
        <template #prefix>ISK</template>
        <n-number-animation
          ref="numberAnimationInstRef"
          :duration="1000"
          show-separator
          :from="0"
          :to="last_loot_value"
        />
        ({{ last_rdd }})
      </n-statistic></n-gi
    >
    <n-gi>
      <n-statistic>
        <template #label> {{ $t('rdf.wave_clear_time') }}<sup>*</sup> </template>
        <template #prefix>~</template>
        <n-countdown :duration="wave_clear_time * 1000" :active="false" />
      </n-statistic>
    </n-gi>
    <n-gi>
      <n-statistic>
        <template #label> {{ $t('rdf.isk_per_tick') }}<sup>*</sup> </template>
        <template #prefix>~ ISK</template>
        <n-number-animation
          ref="numberAnimationInstRef"
          :duration="1000"
          show-separator
          :from="0"
          :to="isk_per_tick"
          :precision="2"
        />
      </n-statistic>
    </n-gi>
  </n-grid>
  <n-flex justify="end" align="center"
    ><sup
      ><span class="disclaimer">*{{ $t('rdf.disclaimer') }}</span></sup
    ></n-flex
  >

  {{ $t('rdf.rampancy') }}
  <n-input-number v-model:value="rampancy" clearable :show-button="false" :precision="0" :min="0" />
  {{ $t('rdf.location.title') }}
  <n-select v-model:value="location_modifier" :options="location_tier" />
  {{ $t('rdf.capital.title') }}
  <n-select v-model:value="capital_modifier" :options="capital_usage" />
  {{ $t('rdf.waves') }}
  <n-slider v-model:value="waves" :min="1" :max="100" :step="1" />
  DPS
  <n-input-number v-model:value="dps" clearable :show-button="false" :precision="0" :min="0" />
  {{ $t('rdf.focus_fire_efficiency') }}
  <n-input-number
    v-model:value="focus_fire_efficiency"
    clearable
    :precision="0"
    :min="0"
    :max="100"
  >
    <template #suffix> % </template></n-input-number
  >

  <n-collapse>
    <n-collapse-item :title="$t('rdf.detail')" name="1">
      <n-table striped size="small">
        <thead>
          <tr>
            <th>{{ $t('rdf.waves') }}</th>
            <th>{{ $t('rdf.total_rdd') }}</th>
            <th>{{ $t('rdf.wave_rdd') }}</th>
            <th>{{ $t('rdf.total_loot') }}</th>
            <th>{{ $t('rdf.wave_loot') }}</th>
            <th>{{ $t('rdf.wave_ehp') }}</th>
            <th>{{ $t('rdf.peak_dps') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="wave in 100" :key="wave">
            <td>{{ wave }}</td>
            <td>{{ new Intl.NumberFormat().format(FE * wave * (wave + 1)) }}</td>
            <td>{{ new Intl.NumberFormat().format(2 * FE * wave) }}</td>
            <td>{{ new Intl.NumberFormat().format(FE * wave * (wave + 1) * rdd_price) }}</td>
            <td>{{ new Intl.NumberFormat().format(2 * FE * wave * rdd_price) }}</td>
            <td>{{ new Intl.NumberFormat().format(diff_points * wave * ehp_per_dp) }}</td>
            <td>
              {{
                new Intl.NumberFormat().format(
                  diff_points * dps_per_dp * wave * (location_modifier * capital_modifier),
                )
              }}
            </td>
          </tr>
        </tbody>
      </n-table>
    </n-collapse-item>
  </n-collapse>
</template>

<style lang="css" scoped>
.disclaimer {
  font-style: italic;
  color: dimgray;
}
</style>

<script setup lang="ts">
import type { NumberAnimationInst } from 'naive-ui';
import { computed, ref } from 'vue';

import { useI18n } from 'vue-i18n';

const numberAnimationInstRef = ref<NumberAnimationInst | null>(null);
const { t } = useI18n();

// const rampancy_data_dump_id = 91773;
const dps_per_dp = 135;
const ehp_per_dp = 4200;
const wave_interval = 20;
const focus_fire_efficiency = ref(100);
const rdd_price = ref(200000);

const location_tier = [
  {
    label: t('rdf.location.low'),
    value: 0.9,
  },
  {
    label: t('rdf.location.mid'),
    value: 1,
  },
  {
    label: t('rdf.location.high'),
    value: 1.1,
  },
];
const capital_usage = [
  {
    label: t('rdf.capital.none'),
    value: 1,
  },
  {
    label: t('rdf.capital.t1carrier'),
    value: 1.4,
  },
  {
    label: t('rdf.capital.other'),
    value: 2,
  },
];

const rampancy = ref();
const location_modifier = ref();
const capital_modifier = ref(1);
const threat_tier = computed(() => {
  if (isNaN(rampancy.value)) {
    return NaN;
  } else if (rampancy.value < 12) {
    return 0;
  } else if (rampancy.value < 36) {
    return 1;
  } else if (rampancy.value < 72) {
    return 2;
  } else {
    return 3;
  }
});
const location_factor = computed(() => {
  if (location_modifier.value > 1) {
    return 1.25;
  } else if (location_modifier.value < 1) {
    return 0.75;
  } else {
    return 1;
  }
});
const diff_points = computed(() => {
  return Math.pow(2, threat_tier.value);
});
const FE = computed(() => {
  return 2 * diff_points.value * location_factor.value;
});
const waves = ref(100);
const peak_dps = computed(() => {
  return (
    diff_points.value *
    dps_per_dp *
    waves.value *
    (location_modifier.value * capital_modifier.value)
  );
});
const wave_ehp = computed(() => {
  return diff_points.value * waves.value * ehp_per_dp;
});
const total_ehp = computed(() => {
  return (diff_points.value * waves.value * (waves.value + 1) * ehp_per_dp) / 2;
});
const last_rdd = computed(() => {
  return 2 * FE.value * waves.value;
});
const total_rdd = computed(() => {
  return FE.value * waves.value * (waves.value + 1);
});
const last_loot_value = computed(() => {
  return last_rdd.value * rdd_price.value;
});
const total_loot_value = computed(() => {
  return total_rdd.value * rdd_price.value;
});
const isk_per_ehp = computed(() => {
  return total_loot_value.value / total_ehp.value;
});
const isk_per_hour = computed(() => {
  return total_loot_value.value / (total_clear_time.value / 3600);
});
const isk_per_tick = computed(() => {
  return isk_per_hour.value / 3;
});
const dps = ref();
const wave_clear_time = computed(() => {
  return wave_ehp.value / (dps.value * (focus_fire_efficiency.value / 100));
});
const total_clear_time = computed(() => {
  return (
    total_ehp.value / (dps.value * (focus_fire_efficiency.value / 100)) +
    wave_interval * waves.value
  );
});
// watch([modifier, diff_points, waves], () => {
//   const total_dp = diff_points.value * waves.value;
//   total_dps.value = total_dp * dps_per_dp;
//   total_ehp.value = total_dp * ehp_per_dp;
//   total_rdd.value = FE.value * waves.value * (waves.value + 1);
//   total_loot_value.value = total_rdd.value * rdd_price.value;
// });
</script>
