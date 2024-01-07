function carregar() {
    var msg = document.getElementById('msg');
    var imgDiv = document.getElementById('img');
    var data = new Date();
 
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var dia = data.getDate();
    var mes = data.getMonth() + 1; // Adiciona 1, pois janeiro é 0
    var ano = data.getFullYear();

    // Formatação dos minutos com zero à esquerda se for menor que 10
    var minutosFormatados = minutos < 10 ? '0' + minutos : minutos;

    msg.innerHTML = `Agora são ${hora}:${minutosFormatados} |  ${dia}/${mes}/${ano}`;

    if (hora >= 6 && hora < 12) {
        imgDiv.style.backgroundImage = "url('./imagens/gifmanhã.gif')";
    } else if (hora >= 12 && hora < 18) {
        imgDiv.style.backgroundImage = "url('./imagens/giftarde.gif')";
    } else {
        imgDiv.style.backgroundImage = "url('./imagens/gifnoite.gif')";
    }
}

carregar(); // Chama a função para executar quando a página carregar
