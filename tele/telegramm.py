import requests

TELEGRAM_BOT_TOKEN = '925065057:AAHY0wdf5NqsZrEgbMAMoDgpC5ZhysgXDpg'
TELEGRAM_CHAT_ID = '-324070270'

def send_message(message):
    params = {
        'chat_id': TELEGRAM_CHAT_ID,
        'text': message
    }
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    r = requests.get(url, params=params)
    if r.status_code == 200:
        print(json.dumps(r.json(), indent=2))
    else:
        r.raise_for_status()

send_message("huevos")
