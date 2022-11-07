// creare prima la lista della spesa 
// creare una costante per le ul dove poi creare dentro gli li da javascript
const listaSpesa = ["acqua", "pasta", "pomodoro", "carne", "verdura"];
const ulEl = document.querySelector("ul");

// assegnare ad "i" il valore 0 per poi inserirlo nel ciclo while
let i = 0;

// i deve essere minore della "listaSpesa.lenght"
// creare all'interno un'altra constante per i "prodotti" da mettere in "li" su html
// ricordarmi il i++ alla fine <- <- <- <- 
while (i < listaSpesa.length) {
    const prodottiEl = document.createElement("li");
    prodottiEl.innerText = listaSpesa[i];
    ulEl.append(prodottiEl);
    i++
};