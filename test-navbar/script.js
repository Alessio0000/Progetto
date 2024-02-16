document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.slide');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -100px 0px" });

  slides.forEach(slide => {
    observer.observe(slide);
  });
});
