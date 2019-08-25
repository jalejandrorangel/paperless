import { Router } from 'meteor/iron:router';
import { Meteor } from 'meteor/meteor';

import '../../ui/layouts/main/main.js';
import '../../ui/layouts/admin/admin.js';

Router.route('/', {
    layoutTemplate: 'main',
    //yieldRegions: {
    //    'cuerpo_inicio': {to:'cuerpo'}        
    //},
    waitOn: function () { return []; },
    data: function () { return {encabezado:'Bienvenido'}; },
    onRun: function () {this.next();}, onRerun: function () {this.next();},
    onBeforeAction: function () {  
        this.next();
    },
    onAfterAction: function () {}, onStop: function () {},
    action: function () { this.render();}
});

Router.route('/admin', {
    layoutTemplate: 'admin',
    //yieldRegions: {
    //    'cuerpo_inicio': {to:'cuerpo'}        
    //},
    waitOn: function () { return []; },
    data: function () { return {encabezado:'Bienvenido'}; },
    onRun: function () {this.next();}, onRerun: function () {this.next();},
    onBeforeAction: function () {  
        this.next();
    },
    onAfterAction: function () {}, onStop: function () {},
    action: function () { this.render();}
});