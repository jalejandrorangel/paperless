import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

import { Documentos } from '../documentos/documentos.js';
import { Historial } from '../documentos/documentos.js';
import { Usuarios } from '../documentos/documentos.js';

//bancoazteca  99aa05cdb0d69feb86f655d24d2ad855-2ae2c6f3-f16e909e
Meteor.methods ({     
    enviar_email(datos) {
		/*process.env.MAIL_URL="smtps://bancoazteca%40mail.juezguapa.com:99aa05cdb0d69feb86f655d24d2ad855-2ae2c6f3-f16e909e@smtp.mailgun.org:465/";*/
        process.env.MAIL_URL="smtps://juezguapa%40gmail.com:acmrules@smtp.gmail.com:465/";
        const to = datos.email;
        /*const from = 'bancoazteca@mail.juezguapa.com';*/
        const from = 'juezguapa@gmail.com';
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
		Historial.insert({texto: 'Guarda tu contrato'});


		let u = Usuarios.findOne({_id:idusuario});
		let telnum  ="878793109";
		if (u.numero == "2223593812")
			telnum = "9965415";
		else if (u.numero == "5560653195")
			telnum = "119478126";

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
		if (u.preferencias.telegram) {
			Documentos.insert({tipo:'telegram', texto:'Guarda tu contrato', numero: telnum})
		}
		if (u.preferencias.messenger) {
			Documentos.insert({tipo:'messenger', texto:'Guarda tu contrato', numero: telnum})
		}
	},

	guardar_retiro(datos) {
		Historial.insert({texto: 'Hubo un retiro de' + datos.monto + " de la tarjeta " + datos.tarjeta});
		let u = Usuarios.findOne({_id:datos.idusuario});
		let telnum  ="878793109";
		if (u.numero == "2223593812")
			telnum = "9965415";
		else if (u.numero == "5560653195")
			telnum = "119478126";
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
		if (u.preferencias.telegram) {
			Documentos.insert({tipo:'telegram', texto:'Hubo un retiro de' + datos.monto + " de la tarjeta " +
				datos.tarjeta, numero: telnum})
		}
		if (u.preferencias.messenger) {
			Documentos.insert({tipo:'messenger', texto:'Hubo un retiro de ' + datos.monto + " de la tarjeta " +
				datos.tarjeta, numero: telnum})
		}
	},

	enviar_comercial(datos) {
		Historial.insert({texto: datos.texto});
		let us = Usuarios.find({['preferencias.telegram']:true}).fetch();
		for (i in us) {
			let u = us[i];
			let telnum  ="878793109";
			if (u.numero == "2223593812")
				telnum = "9965415";
			else if (u.numero == "5560653195")
				telnum = "119478126";
			Documentos.insert({tipo:'telegram', texto: datos.texto, numero: telnum, url:datos.url});	
		}
	}
});
