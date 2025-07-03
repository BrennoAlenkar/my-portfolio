function typeWriter(text, elementId, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    
    if (!element) {
        console.error('Elemento não encontrado:', elementId);
        return;
    }
    
    // Limpa o conteúdo antes de começar
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                element.innerHTML = '';
                if (callback) callback();
            }, 1500);
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', () => {
    const mainText = "I'm a Software Engineer.";
    const speed = 100;
    const element = document.getElementById('marquee-text');
    
    // Garante que o elemento esteja vazio no início
    if (element) {
        element.innerHTML = '';
        
        function restartText() {
            typeWriter(mainText, 'marquee-text', speed, restartText);
        }

        // Inicia com o texto principal e continua repetindo apenas ele
        typeWriter(mainText, 'marquee-text', speed, restartText);
    } else {
        console.error('Elemento marquee-text não encontrado');
    }
});