# This the backend of ML

if you need python virtual env and you have already set python virtual env in your root, just run: `source ~/myenv/bin/activate`

remember to run `pip install -r requirements.txt`


# Explanation of main folders

app: Contains the main application logic

app/routes: Handles different routes for authentication, client management, admin functionalities, Xero integration, and Toggl integration.
app/models: Defines the data models for clients, admins, and integrations.
app/services: Implements business logic, interacts with the database, and integrates with external services.
app/utils: Utility functions for authentication, permissions, security, and email handling.

config: Configuration files for the application, database, Xero, and Toggl.

migrations: Database migration files managed by a migration tool like Alembic.

tests: Unit tests for different parts of the application.

requirements.txt: Lists the Python packages required for your project.

run.py: The entry point for running your Flask application.

# Developers responsibilities in connection to backend

Everyone may create his own database with has unique database credentials (username, password) for their local development database. This helps avoid conflicts and allows each developer to have their isolated environment.

Developers maintain their individual .env files for local configurations.
The `.env` file is added to the project's `.gitignore` to avoid accidental commits

Explaining others suggestion and what to be made, or what has already done
