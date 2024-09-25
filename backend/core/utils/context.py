class RequestContext:
    '''
    This class will be used to maintain context across request-response cycle.
    '''
    def __init__(self, decoded_token: dict[str, str]) -> None:
        self.user_id = decoded_token['user_id']
    

    def get_user_id(self) -> str:
        return self.user_id