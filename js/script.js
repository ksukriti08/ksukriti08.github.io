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

function scrollLeft() {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({
        left: -150, // Adjust this value based on the width of your items
        behavior: 'smooth'
    });
}

function scrollRight() {
    const carousel = document.querySelector('.carousel');
    carousel.scrollBy({
        left: 150, // Adjust this value based on the width of your items
        behavior: 'smooth'
    });
}
