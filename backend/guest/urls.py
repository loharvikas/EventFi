
from django.urls import path, include
from guest.views.guest import GuestCreateView, ContributionCreateView, GuestContributionHistoryView


urlpatterns = [
    path('', GuestCreateView.as_view(), name='create_guest'),
    path('<str:guest_id>/', ContributionCreateView.as_view(), name='create_contribution'),
    path('<str:guest_email>/contributions/', GuestContributionHistoryView.as_view(), name='get_contribution_history'),
]