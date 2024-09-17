let inventario = [
    { nome: 'Detergente', preco: 15, emEstoque: true },
    { nome: 'Esponja', preco: 5, emEstoque: true },
    { nome: 'Desinfetante', preco: 20, emEstoque: false },
    { nome: 'Vassoura', preco: 30, emEstoque: true },
    { nome: 'Pano de Limpeza', preco: 10, emEstoque: true },
    { nome: 'Rodo', preco: 25, emEstoque: true },
    { nome: 'Balde', preco: 18, emEstoque: false },
    { nome: 'Escova de Limpeza', preco: 22, emEstoque: true },
    { nome: 'Limpador Multiuso', preco: 28, emEstoque: true },
    { nome: 'Desengordurante', preco: 17, emEstoque: true },
    { nome: 'Saponáceo', preco: 12, emEstoque: true },
    { nome: 'Sabão em Barra', preco: 8, emEstoque: false },
    { nome: 'Limpa Vidros', preco: 14, emEstoque: true },
    { nome: 'Luvas de Borracha', preco: 7, emEstoque: true },
    { nome: 'Cera para Piso', preco: 35, emEstoque: true }
];

console.log('Inventário inicial:');
console.log(inventario);

// Adiciona um novo produto ao inventário
inventario.push({ nome: 'Alvejante', preco: 23, emEstoque: true });
console.log('\nApós adicionar Alvejante:');
console.log(inventario);

// Remove o último produto do inventário
inventario.pop();
console.log('\nApós remover o último produto:');
console.log(inventario);

// Modifica o preço do Detergente
inventario[0].preco = 18;
console.log('\nApós modificar o preço do Detergente:');
console.log(inventario);

// Marca o Desinfetante e o Sabão em Barra como fora de estoque
for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nome === 'Desinfetante' || inventario[i].nome === 'Sabão em Barra') {
        inventario[i].emEstoque = false;
    }
}
console.log('\nApós marcar o Desinfetante e o Sabão em Barra como fora de estoque:');
console.log(inventario);

// Lista os produtos em estoque
console.log('\nProdutos em estoque:');
for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].emEstoque) {
        console.log(inventario[i].nome + ' está em estoque.');
    }
}

// Usa filter para listar produtos em estoque
let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
console.log('\nProdutos em estoque (usando filter):');
console.log(produtosEmEstoque);
