// -Cree un bucle for en JS que imprima cada nombre en esta lista.
//  miLista = “velma”, “exploradora”, “jane”, “john”, “harry”

let miLista = ['velma', 'exploradora', 'jane', 'john', 'harry'];

for (let nombre of miLista) {
  console.log(nombre);
};

// -Cree un bucle while que recorra la misma lista y también imprima los nombres.
//  Nota: Recuerda crear un contador para que el ciclo no sea infinito.

let miLista = ['velma', 'exploradora', 'jane', 'john', 'harry'];

let i = 0;
while (i <= 4) {
  console.log(miLista[i]);
  i++;
};

// -Cree una función de flecha que devuelva "Hola mundo".

let hola = () => {
    console.log('Hola mundo');
};
  
hola();