function openTrip(evt, tripName) {
    const contents = document.querySelectorAll('.trip-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(tripName).classList.add('active');
    evt.currentTarget.classList.add('active');
}


function openModal(imgElement) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("modal-caption");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.nextElementSibling.innerHTML;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

const carousel = document.querySelector('.carousel');
document.addEventListener('DOMContentLoaded', function() {
    const gardenCarousel = document.querySelector('.cute-garden-gallery .carousel');
    const scrollAmount = 165; // Width of each item + margin (150px + 15px)

    function scrollLeft() {
        gardenCarousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    }

    function scrollRight() {
        gardenCarousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    // Assign these functions to the scroll buttons
    document.querySelector('.cute-garden-gallery .scroll-button.left').onclick = scrollLeft;
    document.querySelector('.cute-garden-gallery .scroll-button.right').onclick = scrollRight;
});



