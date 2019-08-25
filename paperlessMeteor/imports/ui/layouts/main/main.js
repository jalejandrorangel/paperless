// import { $ } from 'meteor/jquery';
import { Template } from 'meteor/templating';
import './main.html';

Template.main.events
({
    'submit form'(event) {
        event.preventDefault();
        Router.go('/admin'); 
    } 
});