/* script.js
 *
 * Projeto: Blog preview card
 * Função principal: melhorar pequenos detalhes de acessibilidade
 * sem depender de qualquer biblioteca externa.
 */

(function () {
  "use strict";

  /**
   * Garante que, ao usar Tab, o primeiro elemento interativo
   * (o link do título do artigo) receba foco facilmente.
   * Isso é um cuidado pequeno, mas deixa o componente mais amigável.
   */

  document.addEventListener("DOMContentLoaded", function () {
    var titleLink = document.querySelector(".card__title-link");

    if (!titleLink) return;

    // Apenas por demonstração: se a URL tiver hash #focus-title,
    // focamos automaticamente o título (por exemplo, em testes).
    if (window.location.hash === "#focus-title") {
      titleLink.focus();
    }

    // Opcional: adiciona uma classe quando o link recebe foco
    // para permitir algum ajuste visual via CSS, se desejado.
    titleLink.addEventListener("focus", function () {
      titleLink.classList.add("is-focused");
    });

    titleLink.addEventListener("blur", function () {
      titleLink.classList.remove("is-focused");
    });
  });
})();