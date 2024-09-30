from django.db import models

from core.models.base import EventFiBaseModel
from event.models import Event

class Guest(EventFiBaseModel):
    email = models.EmailField()
    name = models.CharField(max_length=255, null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='guests')

    class Meta:
        unique_together = ('email', 'name', 'phone_number')

    def __str__(self):
        return f'{self.email} - {self.name} - {self.phone_number}'
    


class Contribution(EventFiBaseModel):
    guest = models.ForeignKey(Guest, on_delete=models.CASCADE, related_name='contributions')
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='contributions')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.guest.email} contributed {self.amount} to {self.event.name}'