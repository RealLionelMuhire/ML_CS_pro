#!/bin/bash

# Create directories
mkdir -p ml_corporate_services
mkdir -p ml_corporate_services/client_management
mkdir -p ml_corporate_services/authentication
mkdir -p ml_corporate_services/common
mkdir -p ml_corporate_services/static
mkdir -p ml_corporate_services/templates

# Create files
touch ml_corporate_services/__init__.py
touch ml_corporate_services/asgi.py
touch ml_corporate_services/settings.py
touch ml_corporate_services/urls.py
touch ml_corporate_services/wsgi.py

touch ml_corporate_services/client_management/__init__.py
mkdir ml_corporate_services/client_management/migrations
touch ml_corporate_services/client_management/admin.py
touch ml_corporate_services/client_management/apps.py
touch ml_corporate_services/client_management/models.py
touch ml_corporate_services/client_management/tests.py
touch ml_corporate_services/client_management/views.py

touch ml_corporate_services/authentication/__init__.py
mkdir ml_corporate_services/authentication/migrations
touch ml_corporate_services/authentication/admin.py
touch ml_corporate_services/authentication/apps.py
touch ml_corporate_services/authentication/models.py
touch ml_corporate_services/authentication/tests.py
touch ml_corporate_services/authentication/views.py

touch ml_corporate_services/common/__init__.py
touch ml_corporate_services/common/admin.py
touch ml_corporate_services/common/apps.py
touch ml_corporate_services/common/models.py
touch ml_corporate_services/common/tests.py
touch ml_corporate_services/common/views.py

touch ml_corporate_services/static/placeholder.txt
touch ml_corporate_services/templates/placeholder.html

touch ml_corporate_services/manage.py
touch ml_corporate_services/requirements.txt
touch ml_corporate_services/README.md

echo "Directory structure and files created successfully."

