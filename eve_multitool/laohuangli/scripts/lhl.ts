import { SixtyCycleDay, SixtyCycleHour, SolarTime, Taboo } from 'tyme4ts';
interface ElementUpdate {
    id: string;
    content: string;
}

function tabooTranslate(taboo_list: Array<Taboo>): string {
    let text: string = "-"
    const dictionary: { [key: string]: string } = {
        "": ""
    };
    if (Array.isArray(taboo_list) && taboo_list.length > 0) {
        text = text.replace("-", "")
        taboo_list.forEach(function (t) {
            if (t instanceof Taboo) {
                text = text.concat((dictionary[t.getName()] || t.getName()), " ");
            }
        })
    }
    return text
}


function update(id: string, t: ElementUpdate["content"]): void {
    const e = document.getElementById(id);
    if (e) {
        e.textContent = t;
    }
}

function updateAll(): void {
    let d = new Date();
    let now: SolarTime = SolarTime.fromYmdHms(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds());
    let hour: SixtyCycleHour = now.getSixtyCycleHour()
    let day: SixtyCycleDay = now.getSolarDay().getSixtyCycleDay()
    console.log(d.toString(), hour.toString())

    const elementsToUpdate: ElementUpdate[] = [
        { id: 'time', content: hour.getSolarTime().getName() },
        { id: 'ttime', content: hour.getName() },
        { id: 'yearmonth', content: day.getSolarDay().getSolarMonth().getSolarYear().getName() + day.getSolarDay().getSolarMonth().getName() },
        { id: 'tyearmonth', content: day.getYear().getName() + "年" + day.getMonth().getName() + "月" },
        { id: 'date', content: day.getSolarDay().getName() },
        { id: 'tdate', content: day.getName() },
        { id: 'day_recommends', content: tabooTranslate(day.getRecommends()) },
        { id: 'hour_recommends', content: tabooTranslate(hour.getRecommends()) },
        { id: 'luck', content: day.getSolarDay().getLunarDay().getMinorRen().getLuck().getName() },
        { id: 'day_avoids', content: tabooTranslate(day.getAvoids()) },
        { id: 'hour_avoids', content: tabooTranslate(hour.getAvoids()) },
        { id: 'battle_location', content: "-" },
        { id: 'lucky_ship', content: "-" },
        { id: 'lucky_region', content: "-" },
    ];

    elementsToUpdate.forEach(element => {
        update(element.id, element.content)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    updateAll();
});