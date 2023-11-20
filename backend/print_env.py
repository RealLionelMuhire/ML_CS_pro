#!/usr/bin/python3
# print_env.py
from dotenv import load_dotenv, find_dotenv

# Load environment variables from the .env file
dotenv_path = find_dotenv()
load_dotenv(dotenv_path)

# Print the loaded environment variables
with open(dotenv_path, 'r') as file:
    env_contents = file.read()

print(f"Contents of .env file:\n{env_contents}")

