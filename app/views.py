from flask import Blueprint, current_app, render_template


blueprint = Blueprint("app", __name__)


@blueprint.route("/", methods=["GET", "POST"])
def home():
    """Home page."""
    current_app.logger.info(blueprint.root_path)
    return render_template("app/home.html")
