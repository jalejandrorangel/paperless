import telegram
data = []

while True:
    try:
        d = input()
        data.append(d)
    except EOFError:
        break
print("simon {}".format(d))
bot = telegram.Bot(token='836491530:AAGgdH1ljzRfwTLiFXu29X7aY1lCdZogFQQ')
chat_id = data[0]
bot.send_message(chat_id=chat_id, text=data[1])
if len(data) == 4:
    bot.send_photo(chat_id=chat_id, photo=data[2])


