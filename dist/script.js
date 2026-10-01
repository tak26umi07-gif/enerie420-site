const items = document.querySelectorAll('.section-title, .about-copy, .chalkboard, .food, .sweet-copy, .sweet-pics, .space-photos, .open-copy, .calendar, .access-card');
items.forEach((item) => item.classList.add('reveal'));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
items.forEach((item) => observer.observe(item));
