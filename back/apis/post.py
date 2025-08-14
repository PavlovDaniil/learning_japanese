from pydantic import BaseModel


class HiraganaTestRequest(BaseModel):
    userinput:str
    hiragana:str