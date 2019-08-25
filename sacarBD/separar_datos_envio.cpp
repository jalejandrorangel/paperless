#include <iostream>
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
    while(cin>>llave and llave!="}")
    {
        vacio = false;                      
        getline(cin, valor);
        limpiar(llave);
        limpiar(valor);

        llave  = llave + ".txt";
        freopen(llave.c_str(), "w", stdout);
        cout<<valor;
        fclose(stdout);
    }
    if (vacio) return 9;
    return 0;
}