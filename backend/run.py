#!/usr/bin/python3
# run.py
from app import app

if __name__ == '__main__':
    app.run(debug=app.config['DEBUG'])
