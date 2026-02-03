document.addEventListener('DOMContentLoaded', function() {
    // 1. Target the specific carousel elements
    const container = document.querySelector('.vr-game .carousel-container');
    const prevBtn = document.querySelector('.vr-game .prev-button');
    const nextBtn = document.querySelector('.vr-game .next-button');
    
    let currentSlide = 0;
    const totalSlides = 3; // For your 3 images

    function updateCarousel() {
        console.log("Current Slide:", currentSlide); // 🛠️ Check your browser console!
        
        // Reset translation classes
        container.classList.remove('translate-1', 'translate-2');
        
        // Add class based on slide index
        if (currentSlide === 1) {
            container.classList.add('translate-1');
        } else if (currentSlide === 2) {
            container.classList.add('translate-2');
        }
    }

    // 2. Attach click events
    nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    });

    prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });
}); // 🌟 This closing bracket was likely missing in your code!