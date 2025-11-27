console.log("Marci Metzger Homes");

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('show');
  });
});

const closeLightbox = () => {
  lightbox.classList.remove('show');
  lightboxImg.src = '';
};

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.querySelectorAll('textarea').forEach(textarea => {
  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  });
});

const navToggle = document.querySelector('.nav-toggle');
const navCenter = document.querySelector('.nav-center');

if (navToggle && navCenter) {
  navToggle.addEventListener('click', () => {
    navCenter.classList.toggle('show');
  });
}
