export function initThemeToggle() {
  const themeButton = document.querySelector('.theme-toggle');
  const html = document.documentElement;

  themeButton.addEventListener('click', () => {
    if (html.classList.contains('dark-theme')) {
      html.classList.remove('dark-theme');
      html.classList.add('light-theme');

      themeButton.setAttribute('aria-pressed', 'false');
      themeButton.setAttribute('aria-label', 'Switch to dark theme');
    } else {
      html.classList.remove('light-theme');
      html.classList.add('dark-theme');

      themeButton.setAttribute('aria-pressed', 'true');
      themeButton.setAttribute('aria-label', 'Switch to light theme');
    }
  });
}
