from flask import Blueprint, render_template


blueprint = Blueprint("laohuangli", __name__, url_prefix="/lhl/")


@blueprint.route("/")
def laohuangli():
    return render_template("laohuangli/lhl.html")
