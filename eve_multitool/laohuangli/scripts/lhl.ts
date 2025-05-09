import { SixtyCycleDay, SixtyCycleHour, SolarTime } from 'tyme4ts';
interface ElementUpdate {
    id: string;
    textContent: string;
}

function tabooTranslate(): string {
    return ""
}


function update(id: string, t: string): void {
    const e = document.getElementById(id);
    if (e) {
        e.textContent = t;
    }
}

function updateAll(): void {
    let d = new Date();
    let local_time: SolarTime = SolarTime.fromYmdHms(d.getFullYear(), d.getMonth(), d.getDay(), d.getHours(), d.getMinutes(), d.getSeconds());
    let now: SixtyCycleHour = local_time.getSixtyCycleHour()
    let today: SixtyCycleDay = local_time.getSolarDay().getSixtyCycleDay()
    console.log(now.toString())

    const elementsToUpdate: ElementUpdate[] = [
        { id: 'time', textContent: now.getSolarTime().getName() },
        { id: 'hour', textContent: now.getName() },
        { id: 'yearmonth', textContent: today.getSolarDay().get },
        { id: 'day', textContent: today.getSolarDay().getDay().toString() },
        { id: 'today', textContent: today.getName() },
        // { id: 'day_recommends', textContent: today.getRecommends(). },
        // { id: 'hour_recommends', textContent: now.getName() },
        { id: 'luck', textContent: today.getSolarDay().getLunarDay().getMinorRen().getLuck().getName() },
        // { id: 'day_avoids', textContent: now.getName() },
        // { id: 'hour_avoids', textContent: now.getName() },
        { id: 'battle_location', textContent: "-" },
        { id: 'lucky_ship', textContent: "-" },
        { id: 'lucky_region', textContent: "-" },
    ];

    elementsToUpdate.forEach(element => {
        update(element.id, element.textContent)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    updateAll();
});