from rest_framework import serializers

class GuestSerializer(serializers.Serializer):
    id = serializers.UUIDField(read_only=True)
    email = serializers.EmailField()
    name = serializers.CharField(max_length=255, required=False, allow_null=True)
    phone_number = serializers.CharField(max_length=20, required=False, allow_null=True)

class ContributionSerializer(serializers.Serializer):
    id = serializers.UUIDField(read_only=True)
    guest = GuestSerializer(read_only=True)
    event = serializers.CharField(source='event.name', read_only=True)
    amount = serializers.DecimalField(max_digits=10, decimal_places=2)
    date = serializers.DateTimeField()
    created_on = serializers.DateTimeField()

class ContributionCreateSerializer(serializers.Serializer):
    amount = serializers.DecimalField(max_digits=10, decimal_places=2)
