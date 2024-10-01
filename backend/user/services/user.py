from user.exceptions.user import ExceptionUserAlreadyExists, ExceptionUserDoesNotExist
from user.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from django.db.models import QuerySet
from guest.models import Contribution

from guest.services.guest import ContributionService

class UserService:
    '''
    This class will be used to perform all the user related operations
    and interact with the database
    '''

    @classmethod
    def get(cls):
        pass

    @classmethod
    def create(cls, email:str, phone_number:str, password:str) -> User:
        if User.objects.filter(email=email).exists():
            raise ExceptionUserAlreadyExists
        user = User.objects.create_user(email=email,password=password, phone_number=phone_number)
        return user
    
    @classmethod
    def get_token(cls, user:User) -> dict[str, str]:
        token = RefreshToken.for_user(user)
        res = {
                "user": user,
                "refresh_token": str(token),
                "access_token": str(token.access_token),
        }
        return res

    @classmethod
    def forget_password(cls, email:str, password:str) -> None:
        if not User.objects.filter(email=email).exists():
            raise ExceptionUserDoesNotExist
        user = User.objects.get(email=email)
        user.set_password(password)
        user.save()

    @classmethod
    def get_contributions(cls, email:str) -> QuerySet[Contribution]:
        contributions = ContributionService.get_contribution_by_email(email)
        return contributions