// Script para animações customizadas
document.addEventListener('DOMContentLoaded', function() {
    // Função para observar elementos com scroll-effect
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    // Observar todos os elementos com classe scroll-effect
    const scrollElements = document.querySelectorAll('.scroll-effect');
    scrollElements.forEach(element => {
        observer.observe(element);
    });

    // Adicionar efeito de entrada inicial após um pequeno delay
    setTimeout(() => {
        const headerElements = document.querySelectorAll('.header .infos > *, .header .img-holder');
        headerElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 300);
});

// Inicializar elementos do header com estado oculto
document.addEventListener('DOMContentLoaded', function() {
    const headerElements = document.querySelectorAll('.header .infos > *, .header .img-holder');
    headerElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

// Melhorar interatividade dos botões com ícones
document.addEventListener('DOMContentLoaded', function() {
    // Efeito especial no botão de download
    const downloadButtons = document.querySelectorAll('a[download]');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i.fa-download');
            if (icon) {
                icon.style.animation = 'none';
                icon.style.transform = 'rotate(360deg) scale(1.2)';

                setTimeout(() => {
                    icon.style.transform = '';
                    icon.style.animation = '';
                }, 1000);
            }
        });
    });

    // Efeito especial no botão de email
    const emailButtons = document.querySelectorAll('a[href^="mailto:"]');
    emailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i.fa-envelope');
            if (icon) {
                icon.style.animation = 'none';
                icon.style.transform = 'rotateY(180deg) scale(1.1)';

                setTimeout(() => {
                    icon.style.transform = '';
                    icon.style.animation = '';
                }, 800);
            }
        });
    });

    // Efeito de ripple nos botões
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                pointer-events: none;
                animation: ripple-effect 0.6s ease-out;
                z-index: 0;
            `;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});