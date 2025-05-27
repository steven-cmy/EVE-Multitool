# -*- coding: utf-8 -*-
"""Laohuangli views."""

from flask import Blueprint, render_template

blueprint = Blueprint(
    "vue",
    __name__,
    url_prefix="/vue",
    static_folder="../static",
    template_folder="./templates",
)


@blueprint.route("/")
def main():
    """VUE."""
    return render_template("vue.html")
