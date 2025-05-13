import Cookies from 'js-cookie';
import $ from "jquery";

interface ElementUpdate {
    id: string;
    value: number;
}

const corp_tax_rate: number = +(Cookies.get('corp-tax-rate') ?? 0);
const sales_tax_rate: number = +(Cookies.get('sales-tax-rate') ?? 0.075);

const time2min = (s: string) => s.split(":").reduce((acc, curr) => acc * 60 + +curr, 0);
const min2time = (m: number) => `${Number.isInteger(m) ? ' ' : '~'}${String(Math.floor(m / 60)).padStart(2, '0')}:${String(Math.round(m) % 60).padStart(2, '0')}`;

function addRow(table: HTMLTableElement) {
    const tbody = table.getElementsByTagName('tbody')[0];
    const rows = tbody.getElementsByTagName('tr');
    const i = rows.length;
    var row = tbody.insertRow();
    row.innerHTML = rows[i - 1].innerHTML;
    row.id = (i + 1).toString();
}

function addRowListener() {
    const t = document.getElementById('players') as HTMLTableElement;
    addRow(t);
    update();
}

function calculate() {
    const table = document.getElementById('players') as HTMLTableElement;
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    const total_mins = time2min(document.getElementById('total-time')?.textContent ?? "00:00")
    const total_count = getValue(document.getElementById('total-counts'))
    const total_runs = getValue(document.getElementById('total-runs'))
    const total_value = getTotalValue();
    const total_cost = getTotalCost();
    const sales_tax = total_value * sales_tax_rate;
    const corp_tax = (total_value - sales_tax) * corp_tax_rate;
    const net_value = total_value - total_cost - sales_tax - corp_tax;
    const counts = table.getElementsByTagName('tbody')[0].getElementsByClassName('counts');
    const runs = table.getElementsByTagName('tbody')[0].getElementsByClassName('runs');
    const weights = table.getElementsByTagName('tbody')[0].getElementsByClassName('weight');
    const shares = table.getElementsByTagName('tbody')[0].getElementsByClassName('share');
    const iphs = table.getElementsByTagName('tbody')[0].getElementsByClassName('iph');

    var adjusted_weights = [], total_iphs = 0;
    for (let i = 0; i < rows.length; i++) {
        adjusted_weights[i] = ((runs[i] as HTMLInputElement).valueAsNumber / total_runs) * (weights[i] as HTMLInputElement).valueAsNumber;
    }
    const total_weight = adjusted_weights.reduce((acc, cur) => acc + cur, 0);
    for (let i = 0; i < rows.length; i++) {
        const adjusted_weight = adjusted_weights[i] / total_weight;
        const share = net_value * adjusted_weight / (counts[i] as HTMLInputElement).valueAsNumber
        const iph = total_mins > 0 ? share / (total_mins / 60) : 0;
        shares[i].setAttribute('data-true-value', share.toString());
        iphs[i].setAttribute('data-true-value', iph.toString());
        total_iphs += iph;
    }
    if (total_mins > 0) {
        const tpr = document.getElementById('time-per-run');
        if (tpr) { tpr.textContent = min2time(total_mins / total_runs) }
    }

    const elementsToUpdate: ElementUpdate[] = [
        { id: 'gross-value', value: total_value },
        { id: 'sales-tax', value: sales_tax },
        { id: 'corp-tax', value: corp_tax },
        { id: 'net-value', value: net_value },
        { id: 'avg-per-run', value: net_value / total_runs },
        { id: 'avg-share', value: net_value / total_count },
        { id: 'avg-iph', value: total_iphs / rows.length },
        { id: 'total-iph', value: total_mins > 0 ? net_value / (total_mins / 60) : 0 },
    ];
    elementsToUpdate.forEach(element => {
        const e = document.getElementById(element.id);
        if (e) {
            e.setAttribute('data-true-value', element.value.toString())
        }
    });

}

function copyToClipboard(e: Element) {
    const value = getValue(e).toString();
    navigator.clipboard.writeText(value).then(() => {
        e.classList.add('text-success');
        setTimeout(() => {
            e.classList.remove('text-success');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        e.classList.add('text-danger');
        setTimeout(() => {
            e.classList.remove('text-danger');
        }, 2000);
    });
}

function deleteRow(table: HTMLTableElement, row_num?: number) {
    const tbody = table.getElementsByTagName('tbody')[0];
    const rows = tbody.getElementsByTagName('tr');
    var id = rows.length
    if (typeof row_num !== 'undefined') {
        id = row_num;
    }
    tbody.removeChild(table.getElementsByTagName('tr')[id]);
}

function deleteRowListener() {
    const t = document.getElementById('players') as HTMLTableElement;
    deleteRow(t);
    update();
}

function fillISk(e: Element, value?: number) {
    var true_value: number = getValue(e);
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
    e.setAttribute('data-true-value', true_value.toString());
}

function getTotalCost(): number {
    return 0
}

function getTotalValue(): number {
    return (document.getElementById('override-value') as HTMLInputElement).valueAsNumber || 0
}

function getValue(e: Element | null): number {
    if (e === null) { return NaN }
    return +(e.getAttribute('data-true-value') ?? e.textContent ?? NaN) || 0
}

function update() {
    const app = document.getElementById('app');
    if (app) {
        const monitorUpdate = [
            app.getElementsByTagName('input'),
            app.getElementsByTagName('textarea'),
            app.getElementsByTagName('select')
        ]
        monitorUpdate.forEach((collection) => {
            for (let i = 0; i < collection.length; i++) {
                const element = collection[i];
                element.addEventListener('change', () => {
                    update();
                });
            }
        });
    }

    const t = document.getElementById('players') as HTMLTableElement;
    updateTable(t);

    calculate();
    updateISKs();
}

function updateISKs() {
    const ISKs = document.getElementsByClassName("ISK");
    for (let i = 0; i < ISKs.length; i++) {
        const isk = ISKs[i];
        fillISk(isk);
        if (isk.classList.contains('copyable')) {
            const value: number = getValue(isk);
            isk.classList.add('disabled')
            if (value !== 0) {
                isk.classList.remove('disabled')
                isk.on('click', copyToClipboard(isk))
                // isk.addEventListener('click', () => {
                //     copyToClipboard(isk);
                // });
            } else {
                isk.classList.add('disabled')
            }
        }
    }
}

function updateTable(table: HTMLTableElement) {
    const limit = 10;
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    const minus_button = document.getElementById('remove-entry');
    const add_button = document.getElementById('add-entry');
    minus_button?.classList.replace('clickable', 'disabled');
    minus_button?.removeEventListener('click', deleteRowListener);
    add_button?.classList.replace('clickable', 'disabled');
    add_button?.removeEventListener('click', addRowListener);
    if (rows.length > 1) {
        minus_button?.classList.replace('disabled', 'clickable');
        minus_button?.addEventListener('click', deleteRowListener);
    }
    if (rows.length < limit) {
        add_button?.classList.replace('disabled', 'clickable');
        add_button?.addEventListener('click', addRowListener);
    }

    const tStart = time2min((document.getElementById('start-time') as HTMLInputElement).value);
    const tEnd = time2min((document.getElementById('end-time') as HTMLInputElement).value);
    const time = document.getElementById('total-time');
    if (time && tStart && tEnd) { time.textContent = min2time((tEnd >= tStart ? tEnd : tEnd + time2min('24:00')) - tStart) }
    var total_count = 0, total_runs = 0;
    const counts = table.getElementsByTagName('tbody')[0].getElementsByClassName('counts');
    const runs = table.getElementsByTagName('tbody')[0].getElementsByClassName('runs');
    for (let i = 0; i < rows.length; i++) {
        total_count += (counts[i] as HTMLInputElement).valueAsNumber;
        total_runs = Math.max(total_runs, (runs[i] as HTMLInputElement).valueAsNumber);
    }
    const totalCountsElement = document.getElementById('total-counts');
    const totalRunsElement = document.getElementById('total-runs');
    if (totalCountsElement) { totalCountsElement.textContent = total_count.toString(); }
    if (totalRunsElement) { totalRunsElement.textContent = total_runs.toString(); }
}

$(function () {
    update();
});