import telegram
bot = telegram.Bot(token='836491530:AAGgdH1ljzRfwTLiFXu29X7aY1lCdZogFQQ')
print(bot.get_me())
updates = bot.get_updates()
#input()
print([(u.message.chat.id, u.message.chat.first_name) for u in updates])
updates = bot.get_updates()
print([u.message.photo for u in updates if u.message.photo])
chat_id = bot.get_updates()[-1].message.chat_id
#chat = bot.chat
#print(chat_id)
#chat_id = "MarcusDaOz"
#chat_id=878793109
chat_id = int(input())
cad = input()
cosas = input()
bot.send_message(chat_id=chat_id, text=cad)
#bot.send_photo(chat_id=chat_id, photo=open('logo.png','rb'))
