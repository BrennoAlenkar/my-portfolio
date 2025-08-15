document.addEventListener('DOMContentLoaded', () => {
    const textos = [
        "Full Stack Developer.",
        "Especialista em JavaScript.",
        "React.js & PHP.",
        "Desenvolvedor Web."
    ];
    const elementId = 'marquee-text';
    const speed = 80;
    const delay = 1500;
    let fraseAtual = 0;

    function typeWriter(text, element, i, callback) {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1);
            setTimeout(() => typeWriter(text, element, i + 1, callback), speed);
        } else {
            setTimeout(callback, delay);
        }
    }

    function startType() {
        const element = document.getElementById(elementId);
        if (!element) return;
        element.innerHTML = '';
        typeWriter(textos[fraseAtual], element, 0, () => {
            fraseAtual = (fraseAtual + 1) % textos.length;
            startType();
        });
    }

    startType();
});