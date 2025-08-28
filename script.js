const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

// Show lightbox
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImage.src = thumb.src;
    currentIndex = index;
    });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Navigate images
function showImage(index) {
  if (index >= thumbnails.length) index = 0;
  if (index < 0) index = thumbnails.length - 1;
  lightboxImage.src = thumbnails[index].src;
  currentIndex = index;
}

nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
prevBtn.addEventListener('click', () => showImage(currentIndex - 1));

// Close on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = 'none';
  } else if (e.key === "ArrowRight") {
      showImage(currentIndex + 1);
  } else if (e.key === "ArrowLeft") {
    showImage(currentIndex - 1);
  }
});