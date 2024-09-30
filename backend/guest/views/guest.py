from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from guest.services.guest import GuestService, ContributionService
from guest.serializers.guest import GuestSerializer, ContributionSerializer, ContributionCreateSerializer
from django.core.exceptions import ObjectDoesNotExist
# import sendgrid
# from sendgrid.helpers.mail import Mail
from django.conf import settings

class GuestCreateView(APIView):
    def get(self, request, event_id:str,  *args, **kwargs):
        guests = GuestService.get_all(event_id)
        serializer = GuestSerializer(guests, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
   
    def post(self, request, event_id:str, *args, **kwargs):
        serializer = GuestSerializer(data=request.data)
        if serializer.is_valid():
            guest = GuestService.create(
                event_id=event_id,
                **serializer.validated_data
            )
            return Response(GuestSerializer(guest).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


class ContributionCreateView(APIView):

    def post(self, request, event_id:str, guest_id:str, *args, **kwargs):
        serializer = ContributionCreateSerializer(data=request.data)
        if serializer.is_valid():
            try:
                contribution = ContributionService.create(
                    guest_id=guest_id,
                    event_id=event_id,
                    **serializer.validated_data
                )
                return Response(ContributionSerializer(contribution).data, status=status.HTTP_201_CREATED)

            except ObjectDoesNotExist:
                return Response({"detail": "Event or guest not found"}, status=status.HTTP_404_NOT_FOUND)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GuestContributionHistoryView(APIView):

    def get(self, request, guest_email):
        guest = GuestService.get_guest_by_email(guest_email)
        if not guest:
            return Response({"detail": "Guest not found"}, status=status.HTTP_404_NOT_FOUND)
        
        contributions = ContributionService.get_contributions_by_guest(guest)
        serializer = ContributionSerializer(contributions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

# # View for Sending Invitations
# class SendInvitationEmailView(APIView):

#     def post(self, request):
#         guest_email = request.data.get('guest_email')
#         event_id = request.data.get('event_id')

#         if not guest_email or not event_id:
#             return Response({"detail": "Missing email or event ID"}, status=status.HTTP_400_BAD_REQUEST)

#         event = EventService.get_event_by_id(event_id)
#         if not event:
#             return Response({"detail": "Event not found"}, status=status.HTTP_404_NOT_FOUND)

#         # Send the invitation using SendGrid
#         try:
#             sendgrid_client = sendgrid.SendGridAPIClient(api_key=settings.SENDGRID_API_KEY)
#             message = Mail(
#                 from_email=settings.DEFAULT_FROM_EMAIL,
#                 to_emails=guest_email,
#                 subject=f'Invitation to {event.name}',
#                 html_content=f'<p>You have been invited to {event.name}. Please join the event at {event.address} on {event.date}.</p>'
#             )
#             sendgrid_client.send(message)

#             return Response({"detail": "Invitation sent successfully"}, status=status.HTTP_200_OK)
#         except Exception as e:
#             return Response({"detail": f"Failed to send invitation: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
