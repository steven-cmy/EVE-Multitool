release: flask db upgrade
web: gunicorn eve_multitool.app:create_app\(\) -b 0.0.0.0:$PORT -w 3
