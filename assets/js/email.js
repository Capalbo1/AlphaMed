function gerarLinkEmail() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const assunto = `Contato de ${nome}`;
    const corpo = `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;

    const linkMailto = `mailto:gustavocsantos16032003@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

    // Abre o link mailto em uma nova janela (pode ser bloqueado pelos navegadores)
    window.open(linkMailto);
  }