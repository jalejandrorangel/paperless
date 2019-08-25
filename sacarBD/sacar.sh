cd ../paperlessMeteor
meteor mongo << EOF  > ../sacarBD/archivo.txt
db.documentos.find({}).limit(1).pretty();
EOF
cd ../sacarBD

#eliminar renglones de mas
sed -i '1,5d;$d' archivo.txt


######para el envio

#separar en archivos
./separar_datos_envio < archivo.txt
if [ $? == 9 ] ; then    
    exit 11
     #no hay nada que compilar
fi
#lo de arriba es en caso de que no haya nada que calificar

#eliminar de la cola de envios
el_id=$(<_id.txt)
cd ../paperlessMeteor
meteor mongo << EOF > ../sacarBD/basura.txt
db.documentos.remove({_id:"$el_id"});
EOF
cd ../sacarBD
