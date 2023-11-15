# config_template.py

class Config:
    # Your other configurations...

class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'mysql://username:password@localhost:3306/your_database_name'
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
