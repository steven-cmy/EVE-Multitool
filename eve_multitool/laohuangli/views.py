# -*- coding: utf-8 -*-
"""Laohuangli views."""

from flask import Blueprint, render_template

blueprint = Blueprint(
    "laohuangli",
    __name__,
    url_prefix="/lhl",
    static_folder="../static",
    template_folder="./templates",
)


@blueprint.route("/")
def laohuangli():
    """Laohuangli."""
    # today = utils.today().get_sixty_cycle_day()
    # now = utils.now().get_sixty_cycle_hour()
    # context = {
    #     "time": now.get_solar_time().get_name(),
    #     "date": today.get_solar_day().get_day(),
    #     "today": today.get_name(),
    #     "now": now.get_name(),
    #     "luck": today.get_solar_day()
    #     .get_lunar_day()
    #     .get_minor_ren()
    #     .get_luck()
    #     .get_name(),
    #     "day_recommends": utils.translate_taboo_list(today.get_recommends()),
    #     "day_avoids": utils.translate_taboo_list(today.get_avoids()),
    #     "hour_recommends": utils.translate_taboo_list(now.get_recommends()),
    #     "hour_avoids": utils.translate_taboo_list(now.get_avoids()),
    #     "battle_location": "",
    #     "lucky_ship": "",
    #     "lucky_region": "",
    #     "direction": today.get_jupiter_direction().get_name(),
    # }
    return render_template("laohuangli.html")
