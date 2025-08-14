from fastapi import APIRouter
from fastapi.responses import JSONResponse
from apis.post import HiraganaTestRequest
from json import load
from random import choice

hiragana = APIRouter()

@hiragana.get("/random_hiragana")
async def random_hiragana():
    with open("hiragana.json", "r") as f:
        list_of_hiragana = load(f)
        keys_of_hiragana = list(list_of_hiragana.keys())
        result = choice(keys_of_hiragana)

    return JSONResponse(content=result, media_type="application/json; charset=utf-8")

@hiragana.post("/hiragana_test")
async def hiragana_test(request: HiraganaTestRequest):
    with open("hiragana.json", "r") as f:
        list_of_hiragana = load(f)
    if request.userinput == list_of_hiragana[request.hiragana][0]:
        return {"status": "success", "result":"true"}
    else:
        return {"status": "success", "result":"true"}