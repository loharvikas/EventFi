from django.db import models

from core.models.base import EventFiBaseModel
from user.models import User



class Event(EventFiBaseModel):
    name = models.CharField(max_length=255)
    date = models.DateField()
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip_code = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name