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

#elif data[2] == "messenger":

elif d[a] =="telegram\n":
    os.rename("datos.txt", "../tele/datos.txt")
    os.chdir("..")
    os.chdir("tele/")
    os.system("python tele.py < datos.txt")
    


