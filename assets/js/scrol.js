document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.custom-card'); // Seletor para os cartões

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10% do cartão visível
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.parentNode.classList.add('visible'); // Adiciona a classe ao pai (card-link)
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    cards.forEach(card => {
        observer.observe(card);
    });
});