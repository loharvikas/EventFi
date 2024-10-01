from guest.services.guest import ContributionService
from user.models import User
from event.models import Event
from typing import Optional, List
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Sum

class EventService:

    @staticmethod
    def create(
        name: str,
        date: str,
        address: str,
        address_line2: str,
        city: str,
        state: str,
        zip_code: str,
        country: str,
        created_by: User
    ) -> Event:
        """Creates a new event."""
        return Event.objects.create(
            name=name,
            date=date,
            address=address,
            address_line2=address_line2,
            city=city,
            state=state,
            zip_code=zip_code,
            country=country,
            created_by=created_by
        )

    @staticmethod
    def get(id: str) -> Optional[Event]:
        """Fetch an event by its ID."""
        try:
            return Event.objects.get(id=id)
        except ObjectDoesNotExist:
            return None

    @staticmethod
    def update(
        id:str,
        name: Optional[str] = None,
        date: Optional[str] = None,
        address: Optional[str] = None,
        address_line2: Optional[str] = None,
        city: Optional[str] = None,
        state: Optional[str] = None,
        zip_code: Optional[str] = None,
        country: Optional[str] = None
    ) -> Event:
        """Updates an existing event with provided data."""
        event = Event.objects.get(id=id)
        if name:
            event.name = name
        if date:
            event.date = date
        if address:
            event.address = address
        if address_line2:
            event.address_line2 = address_line2
        if city:
            event.city = city
        if state:
            event.state = state
        if zip_code:
            event.zip_code = zip_code
        if country:
            event.country = country
        event.save()
        return event

    @staticmethod
    def delete(id:str) -> None:
        """Deletes an event."""
        Event.objects.get(id=id).delete()

    @staticmethod
    def get_all(user: User) -> List[Event]:
        """Returns a list of all events."""
        events = Event.objects.filter(created_by=user)
        return events
        


    @staticmethod
    def get_stat(id: str) -> Optional[Event]:
        """Returns the event's statistics."""
        contributions = ContributionService.get_contributions_by_event(id)
        total_contribution = contributions.aggregate(total=Sum('amount'))['total']
        average_contribution = (total_contribution / len(contributions))
        return {
            'total_contribution': total_contribution,
            'average_contribution': average_contribution
        }