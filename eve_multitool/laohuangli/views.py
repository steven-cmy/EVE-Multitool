# -*- coding: utf-8 -*-
"""Laohuangli views."""

from flask import Blueprint, render_template
from tyme4py.culture import Taboo

blueprint = Blueprint(
    "laohuangli", __name__, url_prefix="/lhl", static_folder="../static"
)


@blueprint.route("/")
def laohuangli():
    """Laohuangli."""
    context = {"Taboo": Taboo.NAMES}
    return render_template("laohuangli/laohuangli.html", context=context)
