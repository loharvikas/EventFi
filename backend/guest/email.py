from guest.models import Guest
from event.models import Event
from django.conf import settings
from django.core.mail import EmailMessage
from django.template.loader import render_to_string

def send_invitation_email( guest:Guest, event:Event):
    """Sends an invitation email using a Django template and SendGrid."""
    # Generate the URL for contributing
    subject = 'Invitation to Contribute!'

    contribution_url = f'http://localhost:3000/events/{event.id}/{guest.id}/contribute'

    email_body = render_to_string('invitation.html', {
            'guest_name': guest.name,
            'event_name': event.name,
            'contribution_url': contribution_url,
        })
        
    email = EmailMessage(
        subject=subject,
        body=email_body,
        from_email=settings.EMAIL_HOST_USER,
        to=[guest.email],  
    )
    
    email.content_subtype = 'html'  
    email.send(fail_silently=False)