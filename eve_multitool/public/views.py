# -*- coding: utf-8 -*-
"""Public section, including homepage and signup."""
import random
import string
import urllib.parse

from flask import (
    Blueprint,
    current_app,
    flash,
    make_response,
    redirect,
    render_template,
    request,
    session,
    url_for,
)
from flask_login import login_required, login_user, logout_user

from eve_multitool.extensions import login_manager
from eve_multitool.public.forms import LoginForm
from eve_multitool.user.forms import RegisterForm
from eve_multitool.user.models import User
from eve_multitool.utils import flash_errors

blueprint = Blueprint("public", __name__, static_folder="../static")


@login_manager.user_loader
def load_user(user_id):
    """Load user by ID."""
    return User.get_by_id(int(user_id))


@blueprint.route("/", methods=["GET", "POST"])
def home():
    """Home page."""
    form = LoginForm(request.form)
    current_app.logger.info("Hello from the home page!")
    # Handle logging in
    if request.method == "POST":
        if form.validate_on_submit():
            login_user(form.user)
            flash("You are logged in.", "success")
            redirect_url = request.args.get("next") or url_for("user.members")
            return redirect(redirect_url)
        else:
            flash_errors(form)
    return render_template("public/home.html", form=form)


@blueprint.route("/logout/")
@login_required
def logout():
    """Logout."""
    logout_user()
    flash("You are logged out.", "info")
    return redirect(url_for("public.home"))


@blueprint.route("/register/", methods=["GET", "POST"])
def register():
    """Register new user."""
    form = RegisterForm(request.form)
    if form.validate_on_submit():
        User.create(
            username=form.username.data,
            email=form.email.data,
            password=form.password.data,
            active=True,
        )
        flash("Thank you for registering. You can now log in.", "success")
        return redirect(url_for("public.home"))
    else:
        flash_errors(form)
    return render_template("public/register.html", form=form)


@blueprint.route("/about/")
def about():
    """About page."""
    form = LoginForm(request.form)
    return render_template("public/about.html", form=form)


@blueprint.route("/sso_login/")
def sso_login():
    """Initiates the EVE Online Single Sign-On (SSO) login process."""
    next = request.args.get("redirect", default=url_for("public.home"))
    state = (
        "".join(
            random.choices(
                string.ascii_letters + string.digits,
                k=current_app.config["SSO_STATE_UID_LENGTH"],
            )
        )
        + next
    )
    session["sso_state"] = state
    scopes = request.args.get(
        "scope",
        default=" ".join(
            [
                "publicData",
                # "esi-calendar.respond_calendar_events.v1",
                # "esi-calendar.read_calendar_events.v1",
                # "esi-location.read_location.v1",
                # "esi-location.read_ship_type.v1",
                # "esi-mail.organize_mail.v1",
                # "esi-mail.read_mail.v1",
                # "esi-mail.send_mail.v1",
                # "esi-skills.read_skills.v1",
                # "esi-skills.read_skillqueue.v1",
                # "esi-wallet.read_character_wallet.v1",
                # "esi-wallet.read_corporation_wallet.v1",
                # "esi-search.search_structures.v1",
                # "esi-clones.read_clones.v1",
                # "esi-characters.read_contacts.v1",
                # "esi-universe.read_structures.v1",
                # "esi-killmails.read_killmails.v1",
                # "esi-corporations.read_corporation_membership.v1",
                # "esi-assets.read_assets.v1",
                # "esi-planets.manage_planets.v1",
                # "esi-fleets.read_fleet.v1",
                # "esi-fleets.write_fleet.v1",
                # "esi-ui.open_window.v1",
                # "esi-ui.write_waypoint.v1",
                # "esi-characters.write_contacts.v1",
                # "esi-fittings.read_fittings.v1",
                # "esi-fittings.write_fittings.v1",
                # "esi-markets.structure_markets.v1",
                # "esi-corporations.read_structures.v1",
                # "esi-characters.read_loyalty.v1",
                # "esi-characters.read_chat_channels.v1",
                # "esi-characters.read_medals.v1",
                # "esi-characters.read_standings.v1",
                # "esi-characters.read_agents_research.v1",
                # "esi-industry.read_character_jobs.v1",
                # "esi-markets.read_character_orders.v1",
                # "esi-characters.read_blueprints.v1",
                # "esi-characters.read_corporation_roles.v1",
                # "esi-location.read_online.v1",
                # "esi-contracts.read_character_contracts.v1",
                # "esi-clones.read_implants.v1",
                # "esi-characters.read_fatigue.v1",
                # "esi-killmails.read_corporation_killmails.v1",
                # "esi-corporations.track_members.v1",
                # "esi-wallet.read_corporation_wallets.v1",
                # "esi-characters.read_notifications.v1",
                # "esi-corporations.read_divisions.v1",
                # "esi-corporations.read_contacts.v1",
                # "esi-assets.read_corporation_assets.v1",
                # "esi-corporations.read_titles.v1",
                # "esi-corporations.read_blueprints.v1",
                # "esi-contracts.read_corporation_contracts.v1",
                # "esi-corporations.read_standings.v1",
                # "esi-corporations.read_starbases.v1",
                # "esi-industry.read_corporation_jobs.v1",
                # "esi-markets.read_corporation_orders.v1",
                # "esi-corporations.read_container_logs.v1",
                # "esi-industry.read_character_mining.v1",
                # "esi-industry.read_corporation_mining.v1",
                # "esi-planets.read_customs_offices.v1",
                # "esi-corporations.read_facilities.v1",
                # "esi-corporations.read_medals.v1",
                # "esi-characters.read_titles.v1",
                # "esi-alliances.read_contacts.v1",
                # "esi-characters.read_fw_stats.v1",
                # "esi-corporations.read_fw_stats.v1",
                # "esi-characterstats.read.v1",
            ]
        ),
    )
    params = {
        "response_type": "code",
        "client_id": current_app.config["ESI_CLIENT_ID"],
        "redirect_uri": url_for("public.sso_callback", _external=True),
        "scope": scopes,
        "state": state,
    }
    return redirect(
        current_app.config["SSO_ENDPOINT"] + "?" + urllib.parse.urlencode(params)
    )


@blueprint.route("/sso_callback/")
def sso_callback():
    """SSO callback handling."""
    state = request.args.get("state")
    code = request.args.get("code")
    if not state or not code or "sso_state" not in session:
        return "403", 403
    if state != session["sso_state"]:
        return session["sso_state"] + "<=>" + state, 403
    next = urllib.parse.unquote(state[current_app.config["SSO_STATE_UID_LENGTH"] :])
    state = state[: current_app.config["SSO_STATE_UID_LENGTH"]]
    resp = make_response(redirect(next))
    resp.set_cookie("esi-auth-code", code)
    return resp
