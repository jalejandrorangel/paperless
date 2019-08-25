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
    os.system("ls")
    #os.system("cd ..//whatsapp/")
    os.chdir("..")
    os.chdir("whatsapp/")
    os.system("ls")

    data.close()
    os.system("python whatsapp.py < datos.txt")

#elif data[2] == "sms":

#elif data[2] == "messenger":

#else: #telegram


