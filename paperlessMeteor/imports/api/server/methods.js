import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

import { Documentos } from '../documentos/documentos.js';


//100, 'No autenticado');
//101, 'Tipo usuario');
//102, 'Usuario no encontrado');
//103, 'Privilegios');
//104, 'No existe el registro');
//105, 'Malos parámetros');
//106, 'Ya existe el registro');
//107, 'Fuera de tiempo');
//108, 'Has superado el límite de creaciones');
//109, 'Debes esperar unos segundos antes de volver a hacer un envío');
//110, 'Verifica tu cuenta');
//111, 'Inscribete al concurso');



Meteor.methods ({     
    'crear_concurso'(nombre) {
		/*
		nombre: nombre del concurso
		*/	
        //if (this.isSimulation) return;                        
		/*if ( !Roles.userIsInRole(this.userId, 'juez') )
            throw new Meteor.Error(101, 'Tipo usuario');
        
        check(nombre, NonEmptyString);
        
        let cuenta = Concursos.find({idautor:this.userId}).count();
        if (cuenta >= 1000)
            throw new Meteor.Error(108, 'Has superado el límite de creaciones');

		let ti = new Date(); let tf = new Date(); let tc = new Date();
		//t -> inicial, final, congelado
		ti.setSeconds(ti.getSeconds()+30000000); tf.setSeconds(tf.getSeconds()+30003600); tc.setSeconds(tc.getSeconds()+30003600 - 1200);
		const concurso_nuevo = {
            nombre: nombre,
            nombre_corto: nombre,			
			inicio: ti, //un anho
			fin: tf,			
			descripcion: 'Descripción',
			premios: 'Premios',
            reglas: 'Reglas',
            bases: 'Bases',
			congelar_en: tc,            
            idautor: this.userId,
			autor: Meteor.users.findOne({_id:this.userId}).username,			
            creado: new Date(),
            imagen: '#'
		}		
		var id_concurso_nuevo = Concursos.insert(concurso_nuevo);		
		return id_concurso_nuevo;*/
	}
});



//blog
//http://naturaily.com/blog/post/how-to-create-blog-in-meteor-not-for-complete-beginners