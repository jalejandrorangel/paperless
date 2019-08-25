// import { $ } from 'meteor/jquery';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import './nuevo.html';

Template.nuevo.events
({
    'click .js-guardar'(event) 
    {
    	event.preventDefault();
    	let datos = {
    		nombre: $('#nombre').val(),
    		email: $('#email').val(),
    		numero: $('#numero').val(),
    		tarjeta: $('#tarjeta').val(),
    		preferencias : {
    			digital: Session.get('digital'),
	    		whatsapp: Session.get('whatsapp'),
	    		email: Session.get('email'),
	    		imprimir: Session.get('imprimir'),
	    		sms: Session.get('sms'),
	    		telegram: Session.get('telegram'),
                messenger: Session.get('messenger'),
    		}
    	}
    	console.log(datos);
    	Meteor.call('guardar_usuario', datos, function(e, r) {
    		Session.set('idusuario', r);
    		Router.go('/admin');
    	})
    },

    'click .js-seleccionar'(event) {
    	event.preventDefault();
    	$(event.target).css('background-color', '#006341');
    	$(event.target).css('color', '#fff');
    	//console.log($(event.target).attr('x'));
    	Session.set($(event.target).attr('x'), true);
    	//background-color: #006341;color:#fff;
    }
});