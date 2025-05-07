from flask import Flask
from . import views
from . import laohuangli

from config import Config


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize Flask extensions here

    # Register blueprints here
    app.register_blueprint(views.blueprint)
    app.register_blueprint(laohuangli.views.blueprint)

    return app
