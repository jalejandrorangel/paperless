from twilio.rest import Client

account_sid = 'ACcc983e041397e6f7a2904113b076fc38'
auth_token = '0b42235a7d9616ee546639a4a63ffcc5'
client = Client(account_sid, auth_token)
numero = input()
body = input()
message = client.messages \
                .create(
                     body=body,
                     from_='+12056513228',
                     to='+52'+numero
                 )

print(message.sid)