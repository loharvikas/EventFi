from rest_framework.exceptions import APIException

class ExceptionUserAlreadyExists(APIException):
    '''
    User with this email already exists
    '''
    status_code = 400
    
    def __init__(self, message:str='User with this email already exists'):
        self.message = message
        super().__init__(message)