from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACcc983e041397e6f7a2904113b076fc38'
auth_token = '0b42235a7d9616ee546639a4a63ffcc5'
client = Client(account_sid, auth_token)

message = client.messages \
                .create(
                     body="Come tierra",
                     from_='+12056513228',
                     to='+525540254462'
                 )

print(message.sid)