import { Mongo } from 'meteor/mongo';

export const Documentos = new  Mongo.Collection("documentos");
export const Usuarios = new  Mongo.Collection("usuarios");