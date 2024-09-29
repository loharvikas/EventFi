from django.urls import path
from event.views.event import EventCreateView, EventRetrieveUpdateDeleteView

urlpatterns = [
    path('/', EventCreateView.as_view(), name='create_event'),
    path('/<str:event_id>/', EventRetrieveUpdateDeleteView.as_view(), name='retrieve_update_delete_event'),
]