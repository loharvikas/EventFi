from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from guest.serializers.guest import ContributionSerializer
from user.serializers.user import ForgetPasswordSerializer, RegisterResponseSerializer, RegisterSerializer
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
    

    
class ForgotPasswordAPIView(APIView):
    def post(self, request: Request, *args, **kwargs) -> Response:
        serializer = ForgetPasswordSerializer(data=request.data)
        if serializer.is_valid():
            UserService.forget_password(**serializer.validated_data)
            return Response({"detail": "Password reset link sent to your email"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class MyContributionsAPIView(APIView):
    def get(self, request: Request, *args, **kwargs) -> Response:
        user = request.user
        if user.is_authenticated:
            contributions = UserService.get_contributions(user.email)
            serializer = ContributionSerializer(contributions, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"detail": "Not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)