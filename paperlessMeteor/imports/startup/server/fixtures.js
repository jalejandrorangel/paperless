import { Meteor } from 'meteor/meteor';
import { Documentos } from '../../api/documentos/documentos.js';
//import { Links } from '../../api/links/links.js';

Meteor.startup(() => {        
    //Programming languages
    Documentos.insert({email:'rb2k4e@gmail.com', texto: 'come tierra'});
});