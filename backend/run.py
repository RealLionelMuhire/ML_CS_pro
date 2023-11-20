#!/usr/bin/python3
# run.py
from app import create_app
from dotenv import load_dotenv, find_dotenv

# Load environment variables from the .env file
dotenv_path = find_dotenv()
load_dotenv(dotenv_path)

# Print the content of the .env file
with open(dotenv_path, 'r') as file:
    env_content = file.read()
    print(".env file content:")
    print(env_content)

# Get the Flask app with configurations
app = create_app()

if __name__ == '__main__':
    app.run(debug=app.config['DEBUG'])
