# -*- coding: utf-8 -*-
"""Laohuangli views."""

from flask import Blueprint, render_template

from . import utils

blueprint = Blueprint(
    "laohuangli", __name__, url_prefix="/lhl", static_folder="../static"
)


@blueprint.route("/")
def laohuangli():
    """Laohuangli."""
    today = utils.today().get_sixty_cycle_day()
    now = utils.now().get_sixty_cycle_hour()
    context = {
        "day_recommends": utils.translate_taboo_list(today.get_recommends()),
        "day_avoids": utils.translate_taboo_list(today.get_avoids()),
        "hour_recommends": utils.translate_taboo_list(now.get_recommends()),
        "hour_avoids": utils.translate_taboo_list(now.get_avoids()),
    }
    return render_template("laohuangli/laohuangli.html", context=context)
