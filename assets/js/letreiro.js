function typeWriter(text, elementId, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                element.innerHTML = '';
                callback();
            }, 1500);
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', () => {
    const mainText = "I'm a Software Engineer.";
    const binaryText = "01001010 01100101 01110011 01110101 01110011";
    const speed = 100;
    const binarySpeed = 80;
    let currentText = mainText;
    let isMainText = true;

    function alternateText() {
        if (isMainText) {
            // Próximo será o texto binário
            currentText = binaryText;
            isMainText = false;
            typeWriter(currentText, 'marquee-text', binarySpeed, alternateText);
        } else {
            // Próximo será o texto principal
            currentText = mainText;
            isMainText = true;
            typeWriter(currentText, 'marquee-text', speed, alternateText);
        }
    }

    // Inicia com o texto principal
    typeWriter(mainText, 'marquee-text', speed, alternateText);
});