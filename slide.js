let currentIndex = 0;


const backgroundColors = ['#240506', '#06090f', '#06090f', '#06090f', '#000000', '#000000', '#06090f', '#000000']; 


function updateSlide(index) {
    const slides = document.querySelectorAll('.slider-content .slide');
    const slider = document.querySelector('.slider-content');
    const body = document.body;


    currentIndex = (index + slides.length) % slides.length;

   
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  
    body.style.backgroundColor = backgroundColors[currentIndex];
}


document.getElementById('prev').addEventListener('click', () => {
    updateSlide(currentIndex - 1);
});

document.getElementById('next').addEventListener('click', () => {
    updateSlide(currentIndex + 1); 
});
