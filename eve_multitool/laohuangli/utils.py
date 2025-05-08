"""
Provides utility functions.

Mostly tyme4py related.
"""

# from datetime import datetime

# from tyme4py.culture import Taboo
# from tyme4py.solar import SolarDay, SolarTime

# dictionary = {
#     "祭祀": "",
#     "祈福": "",
#     "求嗣": "",
#     "开光": "",
#     "塑绘": "",
#     "齐醮": "",
#     "斋醮": "",
#     "沐浴": "",
#     "酬神": "",
#     "造庙": "",
#     "祀灶": "",
#     "焚香": "",
#     "谢土": "",
#     "出火": "",
#     "雕刻": "",
#     "嫁娶": "",
#     "订婚": "",
#     "纳采": "",
#     "问名": "",
#     "纳婿": "",
#     "归宁": "",
#     "安床": "",
#     "合帐": "",
#     "冠笄": "",
#     "订盟": "",
#     "进人口": "",
#     "裁衣": "",
#     "挽面": "",
#     "开容": "",
#     "修坟": "",
#     "启钻": "",
#     "破土": "",
#     "安葬": "",
#     "立碑": "",
#     "成服": "",
#     "除服": "",
#     "开生坟": "",
#     "合寿木": "",
#     "入殓": "",
#     "移柩": "",
#     "普渡": "",
#     "入宅": "",
#     "安香": "",
#     "安门": "",
#     "修造": "",
#     "起基": "",
#     "动土": "",
#     "上梁": "",
#     "竖柱": "",
#     "开井开池": "",
#     "作陂放水": "",
#     "拆卸": "",
#     "破屋": "",
#     "坏垣": "",
#     "补垣": "",
#     "伐木做梁": "",
#     "作灶": "",
#     "解除": "",
#     "开柱眼": "",
#     "穿屏扇架": "",
#     "盖屋合脊": "",
#     "开厕": "",
#     "造仓": "",
#     "塞穴": "",
#     "平治道涂": "",
#     "造桥": "",
#     "作厕": "",
#     "筑堤": "",
#     "开池": "",
#     "伐木": "",
#     "开渠": "",
#     "掘井": "",
#     "扫舍": "",
#     "放水": "",
#     "造屋": "",
#     "合脊": "",
#     "造畜稠": "",
#     "修门": "",
#     "定磉": "",
#     "作梁": "",
#     "修饰垣墙": "",
#     "架马": "",
#     "开市": "",
#     "挂匾": "",
#     "纳财": "",
#     "求财": "",
#     "开仓": "",
#     "买车": "",
#     "置产": "",
#     "雇佣": "",
#     "出货财": "",
#     "安机械": "",
#     "造车器": "",
#     "经络": "",
#     "酝酿": "",
#     "作染": "",
#     "鼓铸": "",
#     "造船": "",
#     "割蜜": "",
#     "栽种": "",
#     "取渔": "",
#     "结网": "",
#     "牧养": "",
#     "安碓磑": "",
#     "习艺": "",
#     "入学": "",
#     "理发": "",
#     "探病": "",
#     "见贵": "",
#     "乘船": "",
#     "渡水": "",
#     "针灸": "",
#     "出行": "",
#     "移徙": "",
#     "分居": "",
#     "剃头": "",
#     "整手足甲": "",
#     "纳畜": "",
#     "捕捉": "",
#     "畋猎": "",
#     "教牛马": "",
#     "会亲友": "",
#     "赴任": "",
#     "求医": "",
#     "治病": "",
#     "词讼": "",
#     "起基动土": "",
#     "破屋坏垣": "",
#     "盖屋": "",
#     "造仓库": "",
#     "立券交易": "",
#     "交易": "",
#     "立券": "",
#     "安机": "",
#     "会友": "",
#     "求医疗病": "",
#     "诸事不宜": "",
#     "馀事勿取": "",
#     "行丧": "",
#     "断蚁": "",
#     "归岫": "",
# }


# def translate_taboo(taboo: Taboo) -> str:
#     """Translate taboo words to EVE Online.

#     Args:
#         taboo (Taboo): The Taboo object from tyme4py.

#     Returns:
#         str: The translated taboo word.
#     """
#     name = taboo.get_name()
#     if not (translated := dictionary.get(name, name)):
#         translated = name
#     return translated


# def translate_taboo_list(input: list[Taboo]) -> list[str]:
#     """Translate a list of Taboo to EVE Online strings.

#     Args:
#         input (list): A list of Taboo object from tyme4py.

#     Returns:
#         list: The translated taboo word list.
#     """
#     return [translate_taboo(t) for t in input]


# def now() -> SolarTime:
#     """Get a SolarTime of now."""
#     t = datetime.now()
#     return SolarTime(t.year, t.month, t.day, t.hour, t.minute, t.second)


# def today() -> SolarDay:
#     """Get a SolarDay of today."""
#     t = datetime.now()
#     return SolarDay(t.year, t.month, t.day)
