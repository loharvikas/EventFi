from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from user.serializers.user import RegisterResponseSerializer, RegisterSerializer
from rest_framework import status

from user.services.user import UserService

class RegisterAPIVIew(APIView):
    def post(self, request: Request, *args, **kwargs) -> Response:
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = UserService.create(**serializer.validated_data)
            response = UserService.get_token(user)
            return Response(RegisterResponseSerializer(response).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    