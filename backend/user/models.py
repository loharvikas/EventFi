from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .manager import UserManager
# Create your models here.

class User(AbstractBaseUser, PermissionsMixin):
    '''
    User model
    '''
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    objects = UserManager()

    USERNAME_FIELD = 'email'  # Use email for login validation
    REQUIRED_FIELDS = ['name',]  # Required fields during superuser creation

    def __str__(self):
        return self.email