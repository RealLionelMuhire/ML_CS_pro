from app import db
from app.models.admin import Admin
from app.utils.security import hash_password

def register_admin(username, password, email, user_type, full_name, national_id, location):
    # Check if the username or email is already in use
    existing_admin = Admin.query.filter_by(username=username).first()
    if existing_admin:
        raise ValueError('Username is already in use. Please choose a different one.')

    existing_email = Admin.query.filter_by(email=email).first()
    if existing_email:
        raise ValueError('Email is already in use. Please use a different email address.')

    # Hash the password before storing it in the database
    hashed_password = hash_password(password)

    # Create a new admin instance
    new_admin = Admin(
        username=username,
        password=hashed_password,
        email=email,
        user_type=user_type,
        full_name=full_name,
        national_id=national_id,
        location=location
        # Add more fields as needed
    )

    # Add the admin to the database
    db.session.add(new_admin)
    db.session.commit()

    return new_admin
