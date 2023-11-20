#!/usr/bin/python3
# run.py
from app import create_app
from dotenv import load_dotenv, find_dotenv

# Load environment variables from the .env file
dotenv_path = find_dotenv()
load_dotenv(dotenv_path)

# Get the Flask app with configurations
app = create_app()

if __name__ == '__main__':
    app.run(debug=app.config['DEBUG'])
