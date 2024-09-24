document.addEventListener('DOMContentLoaded', function() {
    const scrollEffects = document.querySelectorAll('.scroll-effect');

    const options = {
        root: null, // Observa o viewport
        threshold: 0.1 // Ativa quando 10% do elemento está visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // Atraso de 100ms entre cada item
                observer.unobserve(entry.target); // Para observar apenas uma vez
            }
        });
    }, options);

    // Verifica se o dispositivo é móvel
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!isMobile) {
        scrollEffects.forEach(effect => observer.observe(effect));
    } else {
        scrollEffects.forEach(effect => effect.classList.add('visible')); // Faz com que o conteúdo apareça imediatamente
    }
});