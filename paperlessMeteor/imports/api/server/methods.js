import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

import { Documentos } from '../documentos/documentos.js';
import { Usuarios } from '../documentos/documentos.js';

//bancoazteca  99aa05cdb0d69feb86f655d24d2ad855-2ae2c6f3-f16e909e
Meteor.methods ({     
    enviar_email(datos) {
		process.env.MAIL_URL="smtps://bancoazteca%40mail.juezguapa.com:99aa05cdb0d69feb86f655d24d2ad855-2ae2c6f3-f16e909e@smtp.mailgun.org:465/";
        const to = datos.email;
        const from = 'bancoazteca@mail.juezguapa.com';
        const subject = 'Notificacion BAz';
        const text = datos.text;
        Email.send({ to, from, subject, text }); 
	},

	insertar_documento(datos) {
		Documentos.insert(datos);
	},

	guardar_usuario(datos) {
		return Usuarios.insert(datos);
	},

	guardar_contrato(idusuario) {
		let u = Usuarios.findOne({_id:idusuario});
		for (key in u.preferencias) {
			if (u.preferencias.sms) {
				Documentos.insert({tipo:'sms', texto:'Guarda tu contrato', numero: u.numero})
			}
			if (u.preferencias.whatsapp) {
				Documentos.insert({tipo:'whatsapp', texto:'Guarda tu contrato', numero: u.numero,
					url:'https://uva.onlinejudge.org/external/122/12279.pdf'})
			}
			if (u.preferencias.email) {
				Meteor.call('enviar_email', {email:u.email, text:'Guarda tu contrato'});
			}

		}
	},

	guardar_retiro(datos) {
		let u = Usuarios.findOne({_id:datos.idusuario});
		for (key in u.preferencias) {
			if (u.preferencias.sms) {
				Documentos.insert({tipo:'sms', texto:'Hubo un retiro de' + datos.monto + " de la tarjeta " +
					datos.tarjeta, 
					numero: u.numero})
			}
			if (u.preferencias.whatsapp) {
				Documentos.insert({tipo:'whatsapp', texto:'Hubo un retiro de' + datos.monto + " de la tarjeta " +
					datos.tarjeta, numero: u.numero,})
			}
			if (u.preferencias.email) {
				Meteor.call('enviar_email', {email:u.email, text:'Hubo un retiro de' + datos.monto + " de la tarjeta " +
					datos.tarjeta});
			}

		}
	}
});



//blog
//http://naturaily.com/blog/post/how-to-create-blog-in-meteor-not-for-complete-beginners