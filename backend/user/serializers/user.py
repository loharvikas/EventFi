from rest_framework import serializers


class RegisterSerializer(serializers.Serializer):
    email = serializers.EmailField()
    phone_number = serializers.CharField(max_length=10, required=False)
    password = serializers.CharField(max_length=128, )


class UserSerializer(serializers.Serializer):
    email = serializers.EmailField(read_only=True)
    phone_number = serializers.CharField(read_only=True)

class RegisterResponseSerializer(serializers.Serializer):
    user = UserSerializer(read_only=True)
    access_token = serializers.CharField(read_only=True)
    refresh_token = serializers.CharField(read_only=True)
    
class UserUpdateSerializer(serializers.Serializer):
    email = serializers.EmailField(required=False)
    phone_number = serializers.CharField(max_length=15, required=False)

