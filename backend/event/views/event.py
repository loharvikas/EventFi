from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from guest.serializers.guest import ContributionSerializer
from guest.services.guest import ContributionService
from event.services.event import EventService
from event.serializers.event import EventCreateSerializer, EventStatSerializer, EventUpdateSerializer, EventRetrieveSerializer

class EventCreateView(APIView):

    def get(self, request, *args, **kwargs):

        events = EventService.get_all()
        serializer = EventRetrieveSerializer(events, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = EventCreateSerializer(data=request.data)
        if serializer.is_valid():
            event = EventService.create(
                created_by=request.user,
                **serializer.validated_data
            )
            serializer = EventRetrieveSerializer(event)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EventRetrieveUpdateDeleteView(APIView):

    def get(self, request, event_id, *args, **kwargs):
        event = EventService.get(event_id)
        if not event:
            return Response({"detail": "Event not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = EventRetrieveSerializer(event)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, event_id, *args, **kwargs):
        serializer = EventUpdateSerializer(data=request.data)
        if serializer.is_valid():
            updated_event = EventService.update(
                id=event_id,
                **serializer.validated_data
            )
            return Response(EventRetrieveSerializer(updated_event).data, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, event_id, *args, **kwargs):
        EventService.delete(event_id)
        return Response({"detail": event_id}, status=status.HTTP_204_NO_CONTENT)


class EventStatView(APIView):
    def get(self, request, event_id:str,):
        stat = EventService.get_stat(event_id)
        print('--RES-', stat)
        serializer = EventStatSerializer(stat)
        return Response(serializer.data, status=status.HTTP_200_OK)


class EventTopContributorView(APIView):
    def get(self, request, event_id:str,):
        top_contributions = ContributionService.top_contributor(event_id)
        serializer = ContributionSerializer(top_contributions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    


class EventContributionsView(APIView):
    def get(self, request, event_id:str,):
        top_contributions = ContributionService.get_contributions_by_event(event_id)
        serializer = ContributionSerializer(top_contributions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)