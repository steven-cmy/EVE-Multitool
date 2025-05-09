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
    return render_template("laohuangli.html")
