from typing import Any, Dict
from django.http.request import HttpRequest
from rest_framework_simplejwt.tokens import AccessToken
import jwt

from django.conf import settings


class ContextMiddleware:
    """
    ContextMiddleware is a middleware that adds the incoming request information to the context.
    """

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request: HttpRequest):
        JWT_TOKEN = request.META.get("HTTP_AUTHORIZATION")
        if JWT_TOKEN:
            JWT_TOKEN = JWT_TOKEN[7:]  # Remove the "Bearer " prefix
            decoded_token = jwt.decode(JWT_TOKEN, settings.SECRET_KEY, algorithms=['HS256'])
            print('---DECODED--', decoded_token)
            
        
        response = self.get_response(request)
        return response