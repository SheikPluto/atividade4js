//Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira apenas a estrutura base HTML e a tag script 
//para conectar o arquivo HTML com o arquivo de extensão JavaScript.

// Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html, adicione um título simples ao site com o id 
// 'titulo', e um elemento que represente um produto à venda. 
// O produto precisa incluir pelo menos o nome, a descrição e o preço. Pode incluir outros "elementos filhos" 
//se achar necessário como, 
// por exemplo, uma imagem. Procure usar o método simples e o método complexo, ensinados neste tópico.


// Método simples
document.body.innerHTML += '<h1 id="titulo">Meu Site de Vendas</h1>';

// Método complexo
var produtoContainer = document.createElement('div');
produtoContainer.id = 'produto';

var nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Produto A';

var descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Esta é a descrição do Produto A. Um produto incrível para suas necessidades.';

var precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 99,99';

produtoContainer.appendChild(nomeProduto);
produtoContainer.appendChild(descricaoProduto);
produtoContainer.appendChild(precoProduto);

document.body.appendChild(produtoContainer);
