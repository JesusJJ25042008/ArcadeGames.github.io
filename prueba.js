let products = [];
let total = 0;

function Producto (product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Total de monto $ ${total}`
}



function pay() {
    window.alert(products.join(", /n"));
}