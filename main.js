//Inicializando arrays
let product = []
let quantity = []
let quantityValue = []
let price = []
let buttonMinus = []

for(let i = 1; i <= 4; i++) {
    //Definição de array dos produtos
    product[i] = document.getElementById("product-"+1);
    buttonMinus[i] = product[i].getElementsByClassName("minus");
    buttonMinus[i][0].disabled = true

     //Definição do array para armamzenar a estrutura de input e array para armazenar os valores de qtnd
     quantity[i] = document.getElementById("value-quantity-"+i);
     quantityValue[i] = parseInt(quantity[i].value);

     //Definição de Array de preços
     price[i] = parseFloat(product[i].getElementsByClassName("price-product")[0].getElementsByTagName("span")[0].textContent)    
}


// Função para comprar um produto informando o preço final
const buyProduct = (id) => {
    if (confirm(`Preço final: ${Math.round((price[id] * quantityValue[id]) * 100) / 100}`)){
        alert("Produto comprado com sucesso")
    }
}    

//Função para subtrair o valor da quantidade de um produto
const minus = (id) => {
    (quantityValue[id] - 1) === 1 ? buttonMinus[id][0].disabled = true : buttonMinus[id][0].disabled = false
    quantityValue[id] -= 1;
    quantity[id.setAttribute("value", quantityValue[id])]
}

// Função para somar o valor da quantidade de um produto
const plus = (id) => {
    buttonMinus[id][0].disabled = false
    quantityValue[id] += 1;
    quantity[id].setAttribute("value", quantityValue[id])
}
