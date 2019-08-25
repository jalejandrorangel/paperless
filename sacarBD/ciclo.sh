while true
do
    ./sacar.sh
    if [ $? == 11 ] ; then    
        sleep 15s
        #no hay nada que compilar
    fi

done
