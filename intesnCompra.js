
const produtos = [];



async function carregarProdutos() {
    try {
        const response = await fetch('produtos.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar o JSON');
        }
        const produtosCarregados = await response.json();
        produtos.push(...produtosCarregados);

        console.log(produtos[0].nome);
    } catch (error) {
        console.log("deu ruim");
        console.error(error);
    } finally {
        console.log("fim do carregamento de produto");
    }

    let i = produtos.length - 1;
    console.log(i);

    while (i >= 0) {
        const itensPg1 = document.getElementById('itensPg1');
        const item = document.createElement('div');
        item.innerHTML =
            `
            <img src="${produtos[i].imagem}" alt="">
            <div class="nomeProdutoPreco">
                <h2 class="NomeProduto">${produtos[i].nome}</h2>
                <h2 class="valorIten">R$${produtos[i].valor}</h2>
            </div>
            <h3>${produtos[i].descriçao}</h3>
            <button class="btn-comprar" data-index="${i}">comprar</button>
            `;
        item.classList.add('CardProduto');
        itensPg1.appendChild(item);

        i--;
    }

    // Adicionando event listeners aos botões "comprar"
    const botoesComprar = document.querySelectorAll('.btn-comprar');
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', addCarrinho);
    });
}



function addCarrinho(event) {
    const indiceProduto = event.target.getAttribute('data-index');
    const produto = produtos[indiceProduto];

    const carrinho = document.getElementById('carrinho');
    const itemCarrinho = document.createElement('div');
    itemCarrinho.innerHTML = `
        <img src="${produto.imagem}" alt="">
        <h2>${produto.nome}</h2>
        <h2 class="valorItenCarinho">R$${produto.valor}</h2>
        <button class="btn-remover">X</button>
    `;
    itemCarrinho.classList.add('CardItemCarrinho');
    carrinho.appendChild(itemCarrinho);

    // Adicionando event listener ao botão "remover"
    const botaoRemover = itemCarrinho.querySelector('.btn-remover');
    botaoRemover.addEventListener('click', () => {
        itemCarrinho.remove();
        console.log(NumeroIntensCarrinho)
    });

    
}

carregarProdutos();


function fecharCarrinho() {
    const carrinho = document.getElementById('carrinho');
    carrinho.style.display = "none";

   
    
}

function abrirCarrinho() {
    const carrinho = document.getElementById('carrinho');
    carrinho.style.display = "flex";
}




 
 console.log(totalDeItens)






