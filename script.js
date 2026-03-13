// Theme toggle code
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

// Check localStorage for theme preference
if (localStorage.getItem('resume-theme') === 'dark') {
    document.body.classList.add('dark');
    themeIcon.textContent = '🌙';  // Initially set to moon icon
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeIcon.textContent = isDark ? '🌙' : '☀️'; // Toggle between moon and sun icons
    localStorage.setItem('resume-theme', isDark ? 'dark' : 'light');
});