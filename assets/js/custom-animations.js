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