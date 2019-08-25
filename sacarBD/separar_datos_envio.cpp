#include <bits/stdc++.h>
using namespace std;

void limpiar (string & cadena)
{
    while (cadena[cadena.size() - 1] != '\"' ) cadena.pop_back();
    cadena.pop_back();
    reverse ( cadena.begin(), cadena.end());
    while (cadena[cadena.size() - 1] != '\"' ) cadena.pop_back();
    cadena.pop_back();
    reverse ( cadena.begin(), cadena.end());
    return ;
}

int main()
{
    string llave, valor; 
    bool vacio = true;
    map<string, string> mapa;
    while(cin>>llave and llave!="}")
    {
        vacio = false;                      
        getline(cin, valor);
        limpiar(llave);
        limpiar(valor);
        if (llave == "_id")
        {
            llave  = llave + ".txt";
            freopen(llave.c_str(), "w", stdout);
            cout<<valor;
            fclose(stdout);
            freopen("datos.txt", "w", stdout);
        }
        mapa[llave] = valor;
        //cout<<valor;
    }
    if (vacio) return 9;
    cout<<mapa["numero"]<<"\n";
    cout<<mapa["texto"]<<"\n";
    if (mapa["url"]!="")
        cout<<mapa["url"]<<"\n";
    cout<<mapa["tipo"]<<"\n";
    fclose(stdout);
    return 0;
}
