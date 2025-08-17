import uvicorn
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from apis import hiragana



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(hiragana)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)