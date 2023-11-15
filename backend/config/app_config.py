# config/app_config.py
import os

class Config:
    # Your other configurations...

class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI')
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

config_name = os.getenv('FLASK_ENV', 'development')
