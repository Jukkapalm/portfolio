const themeToggleBtn = document.querySelectorAll('.theme-toggle');

themeToggleBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark-theme') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark-theme');
        }
    });
});