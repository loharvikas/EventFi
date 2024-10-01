from rest_framework import serializers

class EventCreateSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    date = serializers.DateField()
    address = serializers.CharField(max_length=255)
    address_line2 = serializers.CharField(max_length=255, required=False)
    city = serializers.CharField(max_length=255)
    state = serializers.CharField(max_length=255)
    zip_code = serializers.CharField(max_length=255)
    country = serializers.CharField(max_length=255)

class EventUpdateSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255, required=False)
    date = serializers.DateField(required=False)
    address = serializers.CharField(max_length=255, required=False)
    address_line2 = serializers.CharField(max_length=255, required=False)
    city = serializers.CharField(max_length=255, required=False)
    state = serializers.CharField(max_length=255, required=False)
    zip_code = serializers.CharField(max_length=255, required=False)
    country = serializers.CharField(max_length=255, required=False)

class EventRetrieveSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    name = serializers.CharField(max_length=255)
    date = serializers.DateField()
    address = serializers.CharField(max_length=255)
    address_line2 = serializers.CharField(max_length=255)
    city = serializers.CharField(max_length=255)
    state = serializers.CharField(max_length=255)
    zip_code = serializers.CharField(max_length=255)
    country = serializers.CharField(max_length=255)
    created_by = serializers.CharField(source='created_by.email')


class EventStatSerializer(serializers.Serializer):
    total_contribution = serializers.DecimalField(max_digits=10, decimal_places=2)
    average_contribution = serializers.DecimalField(max_digits=10, decimal_places=2)
    