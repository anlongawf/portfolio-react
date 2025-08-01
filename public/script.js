document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.reveal-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 200);
        observer.unobserve(entry.target); // Hiện xong ngừng theo dõi
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  sections.forEach((section, index) => {
    section.style.transitionDelay = `${index * 150}ms`;
    observer.observe(section);
  });
});
