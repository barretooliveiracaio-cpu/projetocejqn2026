// MENU PARA CELULAR
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    const aberto = menu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", aberto);
    menuToggle.textContent = aberto ? "✕" : "☰";
});

// FECHAR MENU AO CLICAR EM UM LINK
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// BOTAO PARA COPIAR O CODIGO ARDUINO
const copyButton = document.getElementById("copyButton");
const arduinoCode = document.getElementById("arduinoCode");

copyButton.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(
            arduinoCode.textContent
        );

        copyButton.textContent = "Copiado! ✓";

        setTimeout(() => {
            copyButton.textContent = "Copiar código";
        }, 2000);

    } catch (erro) {
        copyButton.textContent = "Não foi possível copiar";
    }
});

// ANO AUTOMATICO NO RODAPE
document.getElementById("year").textContent =
    new Date().getFullYear();
