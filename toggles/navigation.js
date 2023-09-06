let count = 1;
document.getElementById("section1").checked = true;

function nextImage(){
    count++;
    if(count == 10) {
        count = 1;
    }
    document.getElementById("section" + count).checked == true;
}

const meuBotao = document.getElementById('scroll');

// Adicione um ouvinte de evento de clique ao botão
meuBotao.addEventListener('click', function () {
    // Código a ser executado quando o botão for clicado
    nextImage();
});