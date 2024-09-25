document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.custom-card'); 
    

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.parentNode.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    cards.forEach(card => {
        observer.observe(card);
    });
});