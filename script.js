function animarAoScroll() {
    const elementos = document.querySelectorAll('[data-animar]');
    const topoPagina = window.pageYOffset + window.innerHeight * 0.85;

    elementos.forEach((el) => {
        if (topoPagina > el.offsetTop) {
            el.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', animarAoScroll);
window.addEventListener('load', animarAoScroll);

function enviarWhatsapp() {
    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const numero = "5511999999999"; // Substitua pelo número do seu WhatsApp com DDD e sem símbolos
    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
}
