// import { $ } from 'meteor/jquery';
import { Template } from 'meteor/templating';
import { Historial } from '../../../api/documentos/documentos.js';
import './historial.html';

Template.historial.events
({
    
});

Template.historial.helpers
({
    tickets() {
        return Historial.find();
    }
});