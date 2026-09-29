export function initThemeToggle() {
  const themeButton = document.querySelector('.theme-toggle');
  const html = document.documentElement;

  if (localStorage.getItem('theme') === 'dark') {
    html.classList.remove('light-theme');
    html.classList.add('dark-theme');
  }

  themeButton.addEventListener('click', () => {
    if (html.classList.contains('dark-theme')) {
      html.classList.remove('dark-theme');
      html.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.remove('light-theme');
      html.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  });
}
