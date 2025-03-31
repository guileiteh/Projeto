document.addEventListener('DOMContentLoaded', function() {
    // Variáveis para os botões de aumento e diminuição de fonte
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    // Inicializa o tamanho da fonte (em rem)
    let tamanhoAtualFonte = 1;

    // Evento para aumentar o tamanho da fonte
    aumentaFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Evento para diminuir o tamanho da fonte
    diminuiFonteBotao.addEventListener('click', function() {
        if (tamanhoAtualFonte > 0.5) {  // Impede o tamanho da fonte de ficar muito pequeno
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });

    // Botão para resetar o tamanho da fonte (opcional)
    const botaoReduzirTamanho = document.getElementById("botaoReduzirTamanho");
    botaoReduzirTamanho.addEventListener("click", function() {
        tamanhoAtualFonte = 1;  // Restaura para o tamanho padrão
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Funcionalidade para o menu de acessibilidade
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    // Exibir/ocultar as opções de acessibilidade ao clicar no botão
    botaoDeAcessibilidade.addEventListener('click', function() {
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    });
});
