import os
from twilio.rest import Client
data = []
account_sid = "ACfe80e8492b80acc1c77da60fc069c718"
auth_token = "df7c46b3797acab835364a854727752b"

while True:
    try:
        d = input()
        data.append(d)
    except EOFError:
        break

client = Client(account_sid, auth_token)
if len(data) == 3:
    message = client.messages.create(
        body=data[1],
        to="whatsapp:+521"+data[0],
        from_="whatsapp:+14155238886")
    print(message.sid)
else:
    message = client.messages.create(
        body=data[1],
        media_url=data[2],
        to="whatsapp:+521"+data[0],
        from_="whatsapp:+14155238886")
    print(message.sid)


