document.addEventListener('DOMContentLoaded', function() {
    var h1Element = document.querySelector('.logo');
  
    // Verifica se o elemento foi encontrado antes de continuar
    if (h1Element) {
      var text = h1Element.innerText;
  
      // Aplica a cor vermelha à primeira letra e à sexta letra
      h1Element.innerHTML = '<span style="color: red;">' + text.charAt(0) + '</span>' + text.slice(1, 5) +
                            '<span class="animate" style="color: red;">' + text.charAt(5) + '</span>' + text.slice(6);
    } else {
      console.error('Elemento não encontrado. Verifique a classe ou a estrutura HTML.');
    }
  });
  
  