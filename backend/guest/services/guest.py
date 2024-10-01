from guest.models import Guest, Contribution, Event
from typing import Optional, List
from django.core.exceptions import ObjectDoesNotExist
from typing import Optional

from django.db.models import QuerySet

from guest.email import send_invitation_email



class GuestService:

    @staticmethod
    def get_all(event_id:str) -> List[Guest]:
        """Retrieves all guests for a specific event."""
        event = Event.objects.get(id=event_id)
        guests = Guest.objects.filter(event=event)
        return guests

    @staticmethod
    def create(email: str, name: Optional[str], phone_number: Optional[str], event_id:str) -> Guest:
        """Creates or retrieves a guest based on email, name, and phone number."""
        guest = Guest.objects.create(
            email=email,
            name=name,
            phone_number=phone_number,
            event_id=event_id
        )
        event = Event.objects.get(id=event_id)
        send_invitation_email(guest, event)
        return guest

    @staticmethod
    def get(guest_id: str) -> Optional[Guest]:
        """Fetch a guest by its ID."""
        try:
            return Guest.objects.get(id=guest_id)
        except ObjectDoesNotExist:
            return None

    @staticmethod
    def get_guest_by_email(email: str) -> Optional[Guest]:
        """Fetch a guest by their email."""
        try:
            return Guest.objects.get(email=email)
        except ObjectDoesNotExist:
            return None

class ContributionService:
    @staticmethod
    def create(guest_id: str, event_id: str, amount: float) -> Contribution:
        """Create a contribution for a guest and event."""
        return Contribution.objects.create(
            guest_id=guest_id,
            event_id=event_id,
            amount=amount
        )
    
    @classmethod
    def get_contribution_by_email(cls, email:str) -> QuerySet[Contribution]:
        contributions = Contribution.objects.filter(guest__email=email)
        return contributions

    @staticmethod
    def get_contributions_by_guest(guest: Guest) -> QuerySet[Contribution]:
        """Retrieve all contributions made by a guest."""
        contributions = Contribution.objects.filter(guest_id=guest.id)
        return contributions

    @staticmethod
    def get_contributions_by_event(event_id:str) -> QuerySet[Contribution]:
        """Retrieve all contributions made to an event."""
        contributions = Contribution.objects.filter(event_id=event_id).order_by('-created_on')
        return contributions


    @staticmethod
    def top_contributor(event_id:str,) -> QuerySet[Contribution]:
        """Retrieves the top contributions for an event."""
        contributions = Contribution.objects.filter(event_id=event_id).order_by('-amount')
        return contributions
    
    
    

