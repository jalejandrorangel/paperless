// import { $ } from 'meteor/jquery';
import { Template } from 'meteor/templating';
import './retiros.html';

Template.retiros.events
({
    'click .js-retirar'(event) {
    	event.preventDefault();
    	let datos = {
    		tarjeta: $('#tarjeta').val(),
    		monto: $('#monto').val(),
    		idusuario: Session.get('idusuario')
    	}
    	Meteor.call('guardar_retiro', datos, function(e, r) {
    		Router.go('/admin');
    	})
    }
});