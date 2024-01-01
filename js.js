function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }

  var typed = new Typed("#typed-output", {
    strings: ["Bem-vindo ao meu portfólio", "Bem-vindo ao meu mundo", "Bem-vindo ao meu espaço"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
  });