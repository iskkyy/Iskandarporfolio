document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.vr-game .carousel-container');
    const prevButton = document.querySelector('.vr-game .prev-button');
    const nextButton = document.querySelector('.vr-game .next-button');
    
    let currentSlide = 0; // 0 = first image, 1 = second, 2 = third
    const totalSlides = 3;

    function updateCarousel() {
        // Remove previous translate classes
        carouselContainer.classList.remove('translate-1', 'translate-2');

        // Apply the new translate class based on the currentSlide index
        if (currentSlide === 1) {
            // Show second image
            carouselContainer.classList.add('translate-1');
        } else if (currentSlide === 2) {
            // Show third image
            carouselContainer.classList.add('translate-2');
        }
    }

    nextButton.addEventListener('click', () => {
        // Move to the next slide, but loop back to 0 if we hit the end
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        // Move to the previous slide, but loop to the last slide if we hit the beginning
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    // Set the initial state
    updateCarousel();
});