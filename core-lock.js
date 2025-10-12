// 🌑 Bootyverse Teleport Logic
document.addEventListener('DOMContentLoaded', () => {
  // Fade in
  document.body.classList.add('loaded');

  // Fade out on page transitions
  document.querySelectorAll('a[href]').forEach(link => {
    if (link.getAttribute('target') === '_blank') return;
    link.addEventListener('click', e => {
      const url = link.getAttribute('href');
      if (!url || url.startsWith('#')) return;
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => (window.location.href = url), 600);
    });
  });
});