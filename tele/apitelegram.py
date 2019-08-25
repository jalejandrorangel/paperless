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
#chat_id = int(input())
#cad = input()
#cad = "Banco Azteca te recuerda:\nEl tercer entregable del Hack Challenge de Grupo Salinas se entrega a las 10:00 hrs del día de hoy."
#cosas = input()
#bot.send_message(chat_id=chat_id, text=cad)
#bot.send_message(chat_id=9965415, text=cad)
#bot.send_photo(chat_id=chat_id, photo=open('../../images/logo.png','rb'))
