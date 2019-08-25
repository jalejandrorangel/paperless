// import { $ } from 'meteor/jquery';
import { Template } from 'meteor/templating';
import './contratos.html';

Template.contratos.events
({
    'click .js-contrato'(event) 
    {
    	event.preventDefault();
    	
    	Meteor.call('guardar_contrato', Session.get('idusuario'), function(e, r) {
    		Router.go('/admin');
    	})
    }
});