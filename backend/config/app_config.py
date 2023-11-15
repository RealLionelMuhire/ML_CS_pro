# config/app_config.py

import os

class Config:
    # Your other configurations...

class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'mysql://MLDemoDB:00ML_DEMO@mldemodb.cmasfphtsfy9.eu-north-1.rds.amazonaws.com:3306/MLDemoDB'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

class ProductionConfig(Config):
    DEBUG = False
    # Other production configurations...

# You can set the configuration based on the environment
# For development, you can set FLASK_ENV=development
# For production, you can set FLASK_ENV=production
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}

# You can set the FLASK_ENV environment variable in your run.py or using export
# For example, for development:
# export FLASK_ENV=development
# For production:
# export FLASK_ENV=production
config_name = os.getenv('FLASK_ENV', 'default')
