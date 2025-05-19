import { SixtyCycleDay, SixtyCycleHour, SolarTime, Taboo } from 'tyme4ts';
interface ElementUpdate {
    id: string;
    content: string;
}

function tabooTranslate(taboo_list: Array<Taboo>): string {
    let text: string = "-"
    const dictionary: { [key: string]: string } = {
        "": "",
        "祭祀": "",
        "祈福": "拜BOB",
        "求嗣": "开新小号",
        "开光": "",
        "塑绘": "捏脸",
        "齐醮": "",
        "斋醮": "",
        "沐浴": "洗船",
        "酬神": "",
        "造庙": "",
        "祀灶": "",
        "焚香": "",
        "谢土": "",
        "出火": "",
        "雕刻": "捏船皮肤",
        "嫁娶": "",
        "订婚": "",
        "纳采": "",
        "问名": "",
        "纳婿": "",
        "归宁": "",
        "安床": "",
        "合帐": "",
        "冠笄": "",
        "订盟": "订盟",
        "进人口": "招新",
        "裁衣": "",
        "挽面": "",
        "开容": "",
        "修坟": "",
        "启钻": "",
        "破土": "",
        "安葬": "爆船",
        "立碑": "",
        "成服": "",
        "除服": "",
        "开生坟": "挖坟",
        "合寿木": "",
        "入殓": "",
        "移柩": "",
        "普渡": "",
        "入宅": "",
        "安香": "",
        "安门": "",
        "修造": "",
        "起基": "",
        "动土": "锚定建筑",
        "上梁": "装建筑核心",
        "竖柱": "",
        "开井开池": "",
        "作陂放水": "",
        "拆卸": "",
        "破屋": "",
        "坏垣": "",
        "补垣": "",
        "伐木做梁": "",
        "作灶": "",
        "解除": "",
        "开柱眼": "",
        "穿屏扇架": "",
        "盖屋合脊": "",
        "开厕": "",
        "造仓": "",
        "塞穴": "",
        "平治道涂": "",
        "造桥": "造跳桥",
        "作厕": "下POS",
        "筑堤": "",
        "开池": "挖气",
        "伐木": "挖矿",
        "开渠": "",
        "掘井": "",
        "扫舍": "清理仓库",
        "放水": "",
        "造屋": "造铁壁",
        "合脊": "",
        "造畜稠": "",
        "修门": "",
        "定磉": "",
        "作梁": "",
        "修饰垣墙": "",
        "架马": "",
        "开市": "挂单",
        "挂匾": "",
        "纳财": "进货/讨债",
        "求财": "拼超网",
        "开仓": "",
        "买车": "买船",
        "置产": "买超旗",
        "雇佣": "招新",
        "出货财": "出货",
        "安机械": "",
        "造车器": "",
        "经络": "",
        "酝酿": "",
        "作染": "",
        "鼓铸": "",
        "造船": "造船",
        "割蜜": "",
        "栽种": "种PI",
        "取渔": "堵门",
        "结网": "锚泡泡",
        "牧养": "",
        "安碓磑": "",
        "习艺": "",
        "入学": "",
        "理发": "",
        "探病": "",
        "见贵": "",
        "乘船": "",
        "渡水": "",
        "针灸": "",
        "出行": "去收割",
        "移徙": "",
        "分居": "",
        "剃头": "",
        "整手足甲": "",
        "纳畜": "",
        "捕捉": "",
        "畋猎": "",
        "教牛马": "",
        "会亲友": "",
        "赴任": "",
        "求医": "",
        "治病": "",
        "词讼": "",
        "起基动土": "",
        "破屋坏垣": "",
        "盖屋": "",
        "造仓库": "",
        "立券交易": "",
        "交易": "",
        "立券": "",
        "安机": "",
        "会友": "",
        "求医疗病": "",
        "诸事不宜": "诸事不宜",
        "馀事勿取": "馀事勿取",
        "行丧": "",
        "断蚁": "",
        "归岫": "",
    };
    if (Array.isArray(taboo_list) && taboo_list.length > 0) {
        taboo_list.forEach(function (t) {
            if (t instanceof Taboo) {
                const tname = t.getName();
                if (tname in dictionary && !(text.includes(dictionary[tname]))) {
                    text = text.replace("-", "").concat(dictionary[tname], " ");
                }
            }
        });
    }
    return text;
}

function update(e: HTMLElement, t: string): void {
    e.textContent = t;
}

function updateAll(): void {
    let d = new Date();
    let now: SolarTime = SolarTime.fromYmdHms(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds());
    let hour: SixtyCycleHour = now.getSixtyCycleHour();
    let day: SixtyCycleDay = now.getSolarDay().getSixtyCycleDay();
    console.log(d.toString(), hour.toString());

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
    const lucky = day.getSolarDay().getLunarDay().getMinorRen().getLuck().getIndex() === 0;
    elementsToUpdate.forEach(element => {
        const e = document.getElementById(element.id);
        if (e) {
            update(e, element.content);
            if (!(element.content === "-")) {
                if (element.id === "luck") {
                    updateColor(e, lucky);
                }
                if (element.id.includes("recommends")) {
                    updateColor(e, true);
                }
                if (element.id.includes("avoids")) {
                    updateColor(e, false);
                }
            }
        }
    })

    // const coloredElements = ["time", "ttime", "date", "tdate", "yearmonth", "tyearmonth", "luck"];
    const table = document.getElementById("laohuangli");
    if (table) { table.style.borderColor = lucky ? "green" : "darkred"; }
}

function updateColor(e: HTMLElement, good: any): void {
    if (good === true) {
        e.classList.add("good");
    }
    if (good === false) {
        e.classList.add("bad");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateAll();
});