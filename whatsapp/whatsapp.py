import os
from twilio.rest import Client
data = []
account_sid = "ACfe80e8492b80acc1c77da60fc069c718"
auth_token = "df7c46b3797acab835364a854727752b"
m,numero_destino,image = map(str,input().split())
client = Client(account_sid, auth_token)
#client = Client(os.environ["ACfe80e8492b80acc1c77da60fc069c718"], os.environ["df7c46b3797acab835364a854727752b"])
message = client.messages.create(
    body=m,
    media_url=image,
    to="whatsapp:+521"+numero_destino,
    from_="whatsapp:+14155238886")
print(message.sid)
