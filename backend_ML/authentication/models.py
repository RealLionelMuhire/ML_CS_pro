# backend/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    USER_TYPE_CHOICES = [
        ('Level 1', 'Level 1 Administrator'),
        ('Level 2', 'Level 2 Administrator'),
        ('Level 3', 'Level 3 Administrator'),
        ('Client', 'Client'),
    ]

    UserType = models.CharField(max_length=20, choices=USER_TYPE_CHOICES, default='Client')
    FullName = models.CharField(max_length=255, blank=True, null=True)  # Add this field
    NationalID = models.CharField(max_length=25, blank=True, null=True)  # Add this field
    Location = models.CharField(max_length=100, blank=True, null=True)  # Add this field

    def __str__(self):
        return self.username
