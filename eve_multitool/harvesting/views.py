# -*- coding: utf-8 -*-
"""harvesting views."""

from flask import Blueprint, render_template

blueprint = Blueprint(
    "harvesting",
    __name__,
    url_prefix="/harvesting",
    static_folder="../static",
    template_folder="./templates",
)


@blueprint.route("/")
def main():
    """harvesting."""
    return render_template("harvesting.html")
