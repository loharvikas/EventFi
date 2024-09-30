from django.urls import path, include
from event.views.event import EventContributionsView, EventCreateView, EventRetrieveUpdateDeleteView, EventTopContributorView

urlpatterns = [
    path('', EventCreateView.as_view(), name='create_event'),
    path('<str:event_id>/', EventRetrieveUpdateDeleteView.as_view(), name='retrieve_update_delete_event'),
    path('<str:event_id>/guests/', include('guest.urls')),
    path('<str:event_id>/top_contributor/', EventTopContributorView.as_view(), name='top_contributors'),
    path('<str:event_id>/contributions/', EventContributionsView.as_view(), name='contributions'),
]