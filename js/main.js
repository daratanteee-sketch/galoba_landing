// Mobile menu toggle
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    burgerBtn.classList.toggle('active');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      burgerBtn.classList.remove('active');
    });
  });
}

// FAQ accordion
document.querySelectorAll('.faq__question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq__item');
    const isActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('active'));

    // Open clicked if it was closed
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerHeight = document.querySelector('.header').offsetHeight;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Callback button handler
document.querySelectorAll('[data-action="callback"]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Форма обратного звонка — будет подключена');
  });
});

document.querySelectorAll('[data-action="ai-agent"]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Чат с ИИ-агентом — будет подключен');
  });
});
