from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from event.services.event import EventService
from event.serializers.event import EventCreateSerializer, EventUpdateSerializer, EventRetrieveSerializer

class EventCreateView(APIView):

    def post(self, request):
        serializer = EventCreateSerializer(data=request.data)
        if serializer.is_valid():
            event = EventService.create(
                created_by=request.user
                **serializer.validated_data
            )
            return Response({"id": str(event.id)}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EventRetrieveUpdateDeleteView(APIView):

    def get(self, request, event_id):
        event = EventService.get_event_by_id(event_id)
        if not event:
            return Response({"detail": "Event not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = EventRetrieveSerializer(event)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, event_id):
        serializer = EventUpdateSerializer(data=request.data)
        if serializer.is_valid():
            updated_event = EventService.update(
                id=event_id,
                **serializer.validated_data
            )
            return Response(EventRetrieveSerializer(updated_event).data, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, event_id):
        EventService.delete(event_id)
        return Response({"detail": "Event deleted"}, status=status.HTTP_204_NO_CONTENT)
