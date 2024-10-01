from django.urls import path
from user.views.user import ForgotPasswordAPIView, MyContributionsAPIView, RegisterAPIVIew
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('register/', RegisterAPIVIew.as_view(), name='register'),
    path('my-contributions/', MyContributionsAPIView.as_view(), name='my_contributions'),
    path('login/', TokenObtainPairView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('forget-password/', ForgotPasswordAPIView.as_view(), name='forget_password'),
]