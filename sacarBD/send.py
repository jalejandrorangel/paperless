import os
d =[]
data = open("datos.txt","r")
for line in data.readlines():
    d.append(line)
data.close()
print(d)
if len(d) ==4:
    a = 3
else:
    a =2
if d[a] == "whatsapp\n":
    os.rename("datos.txt", "../whatsapp/datos.txt")
    os.chdir("..")
    os.chdir("whatsapp/")
    os.system("python whatsapp.py < datos.txt")

#elif data[2] == "sms":

if d[a] == "sms\n":
    os.rename("datos.txt", "../sms/datos.txt")
    os.chdir("..")
    os.chdir("sms/")
    os.system("python sms.py < datos.txt")

#elif data[2] == "messenger":
if d[a] == "messenger\n":
    os.rename("datos.txt", "../messenger/datos.txt")
    os.chdir("..")
    os.chdir("messenger/")
    os.system("python messenger.py < datos.txt")

elif d[a] =="telegram\n":
    os.rename("datos.txt", "../tele/datos.txt")
    os.chdir("..")
    os.chdir("tele/")
    os.system("python tele.py < datos.txt")
    


