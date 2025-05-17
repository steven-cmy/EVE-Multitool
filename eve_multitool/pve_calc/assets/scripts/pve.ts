import Cookies from 'js-cookie';
import $ from "jquery";
const bootstrap = require("bootstrap");

interface ElementUpdate {
    id: string;
    value: number;
}

interface FilamentPrice {
    name: string;
    price?: any;
    id?: number;
}

const corp_tax_rate: number = +(Cookies.get('corp-tax-rate') ?? 0);
const sales_tax_rate: number = (0.075 * (1 - (0.11 * +(Cookies.get('accounting-skill-level') ?? 5))));

var filamentPrices: FilamentPrice[] = loadFromLS('filament-prices') ?? [];

const time2min = (s: string) => s.split(":").reduce((acc, curr) => acc * 60 + +curr, 0);
const min2time = (m: number) => `${Number.isInteger(m) ? ' ' : '~'}${String(Math.floor(m / 60)).padStart(2, '0')}:${String(Math.round(m) % 60).padStart(2, '0')}`;

function calculate() {
    $("#corp-tax-percetage").text("(" + corp_tax_rate.toLocaleString('en', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ")");
    $("#sales-tax-percetage").text("(" + sales_tax_rate.toLocaleString('en', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ")");
    const total_mins = time2min($("#total-time").text() || "00:00");
    const total_count = +($("#total-counts").text());
    const total_runs = +($("#total-runs").text());
    const total_value = getTotalValue();
    const total_cost = getTotalCost();
    const sales_tax = total_value * sales_tax_rate;
    const corp_tax = (total_value - sales_tax) * corp_tax_rate;
    const net_value = total_value - total_cost - sales_tax - corp_tax;
    const filament_count = +($("#filament-count").val() ?? 0);
    const expect_filament = total_count * total_runs;
    if (filament_count > 0 && filament_count !== expect_filament) {
        $("#filament-count").attr("data-bs-toggle", "tooltip").addClass("border-danger");
    } else {
        $("#filament-count").removeAttr("data-bs-toggle").removeClass("border-danger");
    }

    var adjusted_weights: number[] = [], total_iphs = 0;
    $("#players>tbody>tr").each(function (i) { adjusted_weights[i] = (+($(this).find(".runs").val() ?? 0) / total_runs) * +($(this).find(".weight").val() ?? 0); });
    const total_weight = adjusted_weights.reduce((acc, cur) => acc + cur, 0);

    $("#players>tbody>tr").each(function (i) {
        const adjusted_weight = adjusted_weights[i] / total_weight;
        const share = net_value * adjusted_weight / (+($(this).find(".counts").val() ?? Infinity));
        const iph = total_mins > 0 ? share / (total_mins / 60) : 0;
        $(this).find(".share").attr('data-true-value', share);
        $(this).find(".iph").attr('data-true-value', iph);
        total_iphs += iph;
    });

    if (total_mins > 0) { $("#time-per-run").text(min2time(total_mins / total_runs)); }

    const elementsToUpdate: ElementUpdate[] = [
        { id: 'gross-value', value: total_value },
        { id: 'total-cost', value: total_cost },
        { id: 'sales-tax', value: sales_tax },
        { id: 'corp-tax', value: corp_tax },
        { id: 'net-value', value: net_value },
        { id: 'avg-per-run', value: net_value / total_runs },
        { id: 'avg-share', value: net_value / total_count },
        { id: 'avg-iph', value: total_iphs / $("#players>tbody>tr").length },
        { id: 'total-iph', value: total_mins > 0 ? net_value / (total_mins / 60) : 0 },
    ];
    elementsToUpdate.forEach(element => { $(`#${element.id}`).attr('data-true-value', element.value.toString()); });

}

function copyToClipboard(e: Element) {
    const value = $(e).attr("data-true-value") ?? $(e).text()
    navigator.clipboard.writeText(value).then(() => {
        $(e).addClass('text-success');
        setTimeout(() => {
            $(e).removeClass('text-success');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        $(e).addClass('text-danger');
        setTimeout(() => {
            $(e).removeClass('text-danger');
        }, 2000);
    });
}

function fillISk(e: Element, value?: number) {
    var true_value: number = +($(e).attr("data-true-value") ?? 0);
    if (typeof value !== 'undefined') {
        true_value = value;
    }
    if (true_value == 0) {
        e.textContent = "-"
    } else {
        e.textContent = true_value.toLocaleString("en", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            useGrouping: true
        });
        // e.textContent = true_value.toLocaleString("en", {
        //     style: "currency",
        //     currency: "ISK",
        //     minimumFractionDigits: 2,
        //     maximumFractionDigits: 2,
        // });
    }
    $(e).attr("data-true-value", true_value);
}

function getTotalCost(): number {
    return +($("#other-cost").val() ?? 0) + 0 || 0;
}

function getTotalValue(): number {
    return +($("#income-value").val() ?? 0) + 0 || 0;
}

function loadFromLS(key: string): any | null {
    const fp = localStorage.getItem(key);
    if (!fp) { return null; }
    const parsed = JSON.parse(fp);
    const now = Date.now();
    if (now > parsed.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return parsed.data;
}

function update() {
    $("input").each(function () { const input = $(this); input.off('change'); input.on('change', () => { update() }) });
    $("textarea").each(function () { const textarea = $(this); textarea.off('change'); textarea.on('change', () => { update() }) });
    $("select").each(function () { const select = $(this); select.off('change'); select.on('change', () => { update() }) });
    updateTable();
    calculate();
    updateISKs();
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = Array.from(tooltipTriggerList).map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

function updateISKs() {
    $(".ISK").each(function () {
        const isk = $(this);
        fillISk(this);
        if (isk.hasClass('copyable')) {
            if (+(isk.attr("data-true-value") ?? 0) !== 0) {
                isk.removeClass('disabled').on('click', () => copyToClipboard(this));
            } else {
                isk.addClass('disabled').off('click');
            }
        }
    });
}

function updatePrice() {
    $("#abyssal-level>option").each(function () {
        const tier = $(this).text().split(" - ")[1] + " ";
        $("#abyssal-weather>option").each(function () {
            const n = tier + $(this).text() + " Filament";
            filamentPrices.push({ name: n });
        });
    });
    $.post(
        "https://esi.evetech.net/latest/universe/ids/?datasource=tranquility&language=en",
        JSON.stringify(filamentPrices.map(item => item.name))
    ).done(function (data) {
        data.inventory_types.forEach((type: any) => {
            const entry = filamentPrices.find(item => item.name === type.name);
            if (entry) { entry.id = type.id; }
        });
        $.get(
            `https://market.fuzzwork.co.uk/aggregates/?region=10000002&types=${filamentPrices.map(item => item.id).filter(id => id !== undefined).join(",")}`
            , function (data) {
                Object.entries(data).forEach(([key, value]) => {
                    const entry = filamentPrices.find(item => item.id === +(key));
                    if (entry) { entry.price = value; }
                });
                saveToLS('filament-prices', filamentPrices, (30 * 60 * 1000));
            });
    });

}

function updateTable() {
    const limit = 10;

    $("#remove-entry").off('click').removeClass('clickable').addClass('disabled');
    $("#add-entry").off('click').removeClass('clickable').addClass('disabled');
    if ($("#players>tbody>tr").length > 1) {
        $("#remove-entry").addClass('clickable').removeClass('disabled');
        $("#remove-entry").on('click', function () {
            $("#players>tbody").children().last().remove();
            update();
        });
    }
    if ($("#players>tbody>tr").length < limit) {
        $("#add-entry").addClass('clickable').removeClass('disabled');
        $("#add-entry").on('click', function () {
            $("#players>tbody").children().last().clone().attr("id", $("#players>tbody").children().length + 1).insertAfter($("#players>tbody").children().last());
            update();
        });
    }

    const tStart = time2min(($("#start-time").val() ?? "")?.toString());
    const tEnd = time2min(($("#end-time").val() ?? "")?.toString());
    if (tStart && tEnd) { $("#total-time").text(min2time((tEnd >= tStart ? tEnd : tEnd + time2min('24:00')) - tStart)); }

    var total_count = 0, total_runs = 0;
    $("#players>tbody>tr").find(".counts").each(function () { total_count += +($(this).val() ?? 0); });
    $("#players>tbody>tr").find(".runs").each(function () { total_runs = Math.max(total_runs, +($(this).val() ?? 0)); });
    $("#total-counts").text(total_count.toString());
    $("#total-runs").text(total_runs.toString());
}

function saveToLS(key: string, data: any, expiry: number) {
    const now = Date.now();
    localStorage.setItem(key, JSON.stringify({ data: data, expiry: now + expiry }));
}

$(function () {
    if (filamentPrices.length === 0) {
        console.log("Update");
        updatePrice();
    }
    update();
    $("#loot").attr("placeholder", "暂不支持！");
});