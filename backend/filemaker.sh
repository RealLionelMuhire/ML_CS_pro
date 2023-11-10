#!/bin/bash

# Create directories
mkdir -p app/routes app/models app/services app/utils config/migrations/versions tests

# Create __init__.py files
touch app/__init__.py app/routes/__init__.py app/models/__init__.py app/services/__init__.py app/utils/__init__.py config/__init__.py config/migrations/__init__.py config/migrations/versions/__init__.py tests/__init__.py

# Create route files
touch app/routes/authentication_routes.py app/routes/client_routes.py app/routes/admin_routes.py app/routes/xero_routes.py app/routes/toggl_routes.py

# Create model files
touch app/models/client.py app/models/admin.py app/models/xero_integration.py app/models/toggl_integration.py

# Create service files
touch app/services/client_service.py app/services/admin_service.py app/services/xero_service.py app/services/toggl_service.py

# Create utils files
touch app/utils/authentication.py app/utils/permissions.py app/utils/security.py app/utils/email.py

# Create config files
touch config/__init__.py config/app_config.py config/database_config.py config/xero_config.py config/toggl_config.py

# Create migrations file
touch config/migrations/versions/version1.py

# Create test files
touch tests/test_authentication.py tests/test_client_routes.py tests/test_admin_routes.py tests/test_xero_integration.py tests/test_toggl_integration.py

# Create requirements.txt file
echo -e "Flask==2.0.1\nFlask-RESTful==0.3.9\nFlask-SQLAlchemy==3.0\nFlask-Migrate==3.1.0\nmysql-connector-python==8.0.28\nrequests==2.26.0\npython-dotenv==0.19.1\nmarshmallow==3.14.0\nXero-Wrapper==0.5.4\nTogglPy==1.2.6" > requirements.txt

# Display success message
echo "File structure created successfully!"

