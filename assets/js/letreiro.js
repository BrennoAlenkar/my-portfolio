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
    const speed = 100;

    function restartText() {
        typeWriter(mainText, 'marquee-text', speed, restartText);
    }

    // Inicia com o texto principal e continua repetindo apenas ele
    typeWriter(mainText, 'marquee-text', speed, restartText);
});