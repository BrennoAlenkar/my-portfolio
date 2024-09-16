        // Função para criar o efeito de digitação
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
                    }, 1000);
                }
            }

            type();
        }

        // Inicia o efeito de digitação repetido quando o conteúdo da página estiver carregado
        document.addEventListener('DOMContentLoaded', () => {
            const text = "I'm a software Engineer."; 
            const speed = 100; 
            const callback = () => typeWriter(text, 'marquee-text', speed, callback);
            typeWriter(text, 'marquee-text', speed, callback);
        });