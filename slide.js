let currentIndex = 0;

function nextSlide() {
    const slides = document.querySelectorAll('.slider-content .slide');
    const slider = document.querySelector('.slider-content');
    currentIndex = (currentIndex + 1) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Intervalo automático para mudar os slides
setInterval(nextSlide, 5000); // Muda a cada 3 segundos
