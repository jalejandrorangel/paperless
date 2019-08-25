import { Mongo } from 'meteor/mongo';

export const Documentos = new  Mongo.Collection("documentos");
export const Historial = new  Mongo.Collection("historial");
export const Usuarios = new  Mongo.Collection("usuarios");