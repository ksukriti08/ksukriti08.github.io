function openTrip(evt, tripName) {
    var i, tabcontent, tablinks;

    // Hide all tab contents
    tabcontent = document.getElementsByClassName("trip-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // Remove the "active" class from all tabs
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tab content and add the "active" class to the clicked tab
    document.getElementById(tripName).style.display = "block";
    document.getElementById(tripName).classList.add("active");
    evt.currentTarget.className += " active";
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





