import { Router } from 'meteor/iron:router';
import { Meteor } from 'meteor/meteor';

import '../../ui/layouts/main/main.js';
import '../../ui/layouts/admin/admin.js';
import '../../ui/layouts/retiros/retiros.js';
import '../../ui/layouts/nuevo/nuevo.js';
import '../../ui/layouts/contratos/contratos.js';
import '../../ui/layouts/comercial/comercial.js';
import '../../ui/layouts/escoger/escoger.js';

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

Router.route('/admin/retiros', {
    layoutTemplate: 'retiros',
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

Router.route('/admin/nuevo', {
    layoutTemplate: 'nuevo',
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

Router.route('/admin/contratos', {
    layoutTemplate: 'contratos',
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

Router.route('/admin/comercial', {
    layoutTemplate: 'comercial',
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




Router.route('/admin/escoger', {
    layoutTemplate: 'escoger',
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