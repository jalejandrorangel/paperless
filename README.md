# Paperless
## Equipo de desarrollo

 1. Aguilar Pelcastre Marco Antonio
 2. Feliciano Avelino Iván
 3. Rangel Amaro Joel Alejandro
 4. Ramírez Gómez Saraí
 5. Silverio Flores Moroni

## Configuración previa
Este proyecto utiliza un servidor meteor, una base de datos en MongoDB y un servicio de twilio para mensajería, asegúrate de contar con los componentes necesarios.

En el archivo "paperless/whatsapp/whatsapp.py" se deben poner los campos "account_sid" y "authentication_token" de acuerdo a las credenciales proporcionadas en twilio, así como en message se debe poner el número proporcionado por twilio en el campo "from_".

Para la mensajería de Telegram, primero se debe configurar un bot enviando /newbot a @BotFather, después se debe editar el archivo "paperless/tele/tele.py" y poner el token del bot que se acaba de crear en el campo "token" del bot declarado en el archivo.

## Iniciar Servicios

Para iniciar el servicio de meteor se debe acceder a la carpeta "paperless/paperlessMeteor/" y ejecutar el comando "meteor run", el cual levantará el servicio de meteor que interactúa con los clientes (ejecutivos de banco, clientes del banco, etc).

Para el servicio de mensajería, se debe acceder a la carpeta "paperless/sacarDB" y ejecutar el script "ciclo.sh" a través del comando "./ciclo.sh", esto mantendrá el control de las peticiones de mensajes en Facebook, Whatsapp, Telegram y SMS, así como el servicio de correo.
