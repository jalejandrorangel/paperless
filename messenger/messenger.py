import requests

input_data = []

# PSID* Body (opt) URL (opt) 
while True:
    try:
        d = input()
        input_data.append(d)
    except EOFError:
        break
# PDF_URL = "https://arxiv.org/pdf/1312.5602.pdf"
PSID = "2443490355738743"
# body = "hola nariz de bola"
headers = {'Content-Type': 'application/json',}
params = (('access_token', 'EAASsot2ODXwBABitpWOHZAqnfcqMErqnZAxTj1cpQiW4FlWX49yEqmAQZCZBwRMR0eZAGCWBS6ABetQ55ZBEZCcDKai5uItUj1GHDnVaaDi14Wxfq94KDd0ZCzjZAtnZATZCay2fZC9Vx415wCp4m9sgXU8sLPhkYU4keISIfWJ6LTyqIZCKTPDUDekFg'),)

# Cuando es texto
if len(input_data) == 3:
	data = '{"recipient":{"id":"' + PSID + '"},"message":{"text":"' + input_data[1] + '"}}'
# Cuando hay url
else:
	data = '{"recipient":{"id":"' + PSID + '"},"message":{"attachment":{"type":"file","payload":{"url":"' + input_data[2] + '","is_reusable":true}}}}'
response = requests.post('https://graph.facebook.com/v4.0/me/messages', headers=headers, params=params, data=data)
