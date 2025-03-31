// Aumentar e diminuir fonte
document.getElementById('aumentar-fonte').addEventListener('click', function() {
    document.body.style.fontSize = '18px';
});

document.getElementById('diminuir-fonte').addEventListener('click', function() {
    document.body.style.fontSize = '14px';
});

// Toggle do menu de acessibilidade
document.getElementById('acessibilidade-botao').addEventListener('click', function() {
    const menu = document.getElementById('opcoes-acessibilidade');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
});