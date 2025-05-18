# -*- coding: utf-8 -*-
"""PvE Calc views."""

from flask import Blueprint, render_template

blueprint = Blueprint(
    "pve_calc",
    __name__,
    url_prefix="/pve-calc",
    static_folder="../static",
    template_folder="./templates",
)


@blueprint.route("/")
def main():
    """pve_calc."""
    return render_template("main.html")
