from json import load
import random
with open("../hiragana.json") as f:
    list_of_hiragana = load(f)
    keys_of_hiragana = list(list_of_hiragana.keys())
    print(random.choice(keys_of_hiragana))