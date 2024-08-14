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
    var selectedTabContent = document.getElementById(tripName);
    selectedTabContent.style.display = "block";
    selectedTabContent.classList.add("active");
    evt.currentTarget.className += " active";

    // Fix layout issue by triggering reflow (optional)
    selectedTabContent.offsetHeight; // Trigger reflow
}

window.onload = function() {
    // Ensure the first trip's tab content is shown on page load
    document.querySelector('.tab-button.active').click();
};


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

function scrollLeft(button) {
    const gallery = button.closest('.cute-garden-gallery');
    const carousel = gallery.querySelector('.carousel-wrapper');
    carousel.scrollLeft -= 150;
}

function scrollRight(button) {
    const gallery = button.closest('.cute-garden-gallery');
    const carousel = gallery.querySelector('.carousel-wrapper');
    carousel.scrollLeft += 150;
}









