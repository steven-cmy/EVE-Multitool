# -*- coding: utf-8 -*-
"""Application configuration.

Most configuration is set via environment variables.

For local development, use a .env file to set
environment variables.
"""
from environs import Env

env = Env()
env.read_env()

ENV = env.str("FLASK_ENV", default="production")
DEBUG = ENV == "development"
SQLALCHEMY_DATABASE_URI = env.str("DATABASE_URL")
SECRET_KEY = env.str("SECRET_KEY")
SEND_FILE_MAX_AGE_DEFAULT = env.int("SEND_FILE_MAX_AGE_DEFAULT")
BCRYPT_LOG_ROUNDS = env.int("BCRYPT_LOG_ROUNDS", default=13)
DEBUG_TB_ENABLED = DEBUG
DEBUG_TB_INTERCEPT_REDIRECTS = False
CACHE_TYPE = (
    "flask_caching.backends.SimpleCache"  # Can be "MemcachedCache", "RedisCache", etc.
)
SQLALCHEMY_TRACK_MODIFICATIONS = False

# EVE Online services
SSO_ENDPOINT = env.str("EVE_SSO_ENDPOINT")
SSO_STATE_UID_LENGTH = 16
ESI_ENDPOINT = f"https://{env.str("EVE_ESI_DOMAIN")}/{env.str("EVE_ESI_VERSION")}/"
ESI_DATASOURCE = env.str("EVE_ESI_SERVER")
ESI_CLIENT_ID = env.str("EVE_ESI_CLIENT_ID")
ESI_SECRET = env.str("EVE_ESI_CLIENT_SECRET")
