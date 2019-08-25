// import { $ } from 'meteor/jquery';
import { Template } from 'meteor/templating';
import './comercial.html';

Template.comercial.events
({
    'click .js-comercial'(event) 
    {
    	event.preventDefault();
    	let datos = {
    		texto: $('#texto').val(),
    		url: $('#url').attr('src'),
    	}
    	console.log(datos);
    	Meteor.call('enviar_comercial', datos, function(e, r) {
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