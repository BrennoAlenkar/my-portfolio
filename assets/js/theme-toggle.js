// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    const headerImg = document.querySelector('.header .img-holder img');
    
    // Imagens para cada tema
    const images = {
        dark: 'assets/imgs/Imagem_-img-removebg-preview.png',
        light: 'assets/imgs/Imagem_-img-removebg-preview.png' // Mesma imagem por enquanto
    };
    
    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply the saved theme
    body.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);
    updateImage(currentTheme);
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Apply new theme
        body.setAttribute('data-theme', newTheme);
        
        // Save theme preference
        localStorage.setItem('theme', newTheme);
        
        // Update icon and image
        updateIcon(newTheme);
        updateImage(newTheme);
        
        // Add smooth transition effect
        body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
    
    function updateIcon(theme) {
        if (theme === 'light') {
            themeIcon.className = 'fas fa-moon';
        } else {
            themeIcon.className = 'fas fa-sun';
        }
    }
    
    function updateImage(theme) {
        if (headerImg) {
            if (theme === 'light') {
                // No modo claro, aplicar apenas um filtro sutil que escurece a camisa
                headerImg.style.filter = 'sepia(0.3) saturate(0.7) contrast(1.1)';
            } else {
                // No modo escuro, imagem normal
                headerImg.style.filter = '';
            }
        }
    }
});
