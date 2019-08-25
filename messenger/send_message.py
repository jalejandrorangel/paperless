import requests

PDF_URL = "https://arxiv.org/pdf/1312.5602.pdf"
PSID = 2443490355738743
headers = {'Content-Type': 'application/json',}
params = (('access_token', 'EAASsot2ODXwBABitpWOHZAqnfcqMErqnZAxTj1cpQiW4FlWX49yEqmAQZCZBwRMR0eZAGCWBS6ABetQ55ZBEZCcDKai5uItUj1GHDnVaaDi14Wxfq94KDd0ZCzjZAtnZATZCay2fZC9Vx415wCp4m9sgXU8sLPhkYU4keISIfWJ6LTyqIZCKTPDUDekFg'),)
data = data = '{"recipient":{"id":"' + str(PSID) + '"},"message":{"attachment":{"type":"file","payload":{"url":"' + str(PDF_URL) + '","is_reusable":true}}}}'
response = requests.post('https://graph.facebook.com/v4.0/me/messages', headers=headers, params=params, data=data)

