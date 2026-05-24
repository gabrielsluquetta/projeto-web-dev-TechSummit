const compras=[];

const nome = document.getElementById("nome");
const tipoIngresso = document.getElementById("tiposIngressos");
const botaoCompra = document.getElementById("botaoCompra");
const finalizar = document.getElementById("Finalizar");
const lista = document.getElementById("ListaCompras");
const botaoLista = document.getElementById("botaoLista");

const comprar = () => {
    const nomeUsuario = nome.value;
    if(nomeUsuario == ""){
        finalizar.innerHTML= "digite um nome!";
        return;
    }
    const valor = Number(tipoIngresso.value);
    const desconto = Math.floor(Math.random()*10)
    const pagar = valor - (valor * desconto/100)
    const data = new Date()
    const compra = {
        pessoa: nomeUsuario,
        ingresso: valor,
        desconto: desconto,
        total: pagar,
        horario: data.toLocaleString("pt-BR")
 };
 
    const novasCompras = [...compras, compra];

    compras.length = 0;
    compras.push(...novasCompras);

    finalizar.innerHTML = `
        <p>Compra realizada!</p>
        <p>Nome: ${nomeUsuario}</p>
        <p>Desconto: ${desconto}%</p>
        <p>Total Pago: R$ ${pagar.toFixed(2)}</p>
    `;

    nome.value = "";
};
const exibirLista = () => {
    lista.innerHTML = "";
    compras.forEach((item, index) => {
        lista.innerHTML += `
        <div>
        <p>Compra ${index + 1}:</p>
        <p>Participante: ${item.pessoa}</p>
        <p>Ingresso: R$ ${item.ingresso.toFixed(2)}</p>
        <p>Desconto: ${item.desconto}%</p>
        <p>Total: R$ ${item.total.toFixed(2)}</p>
        <p>Horário: ${item.horario}</p>
        </div>
        `;
    });
    let soma = 0;
    for(let i = 0; i < compras.length; i++){
        soma += compras[i].total;
    }
    lista.innerHTML += `
        <h2>Total Arrecadado: R$ ${soma.toFixed(2)}</h2>
    `;
};
botaoCompra.addEventListener("click", comprar);

botaoLista.addEventListener("click", exibirLista);