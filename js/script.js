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

let carousel = document.querySelector('.carousel');

function scrollLeft() {
    carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
    carousel.style.transition = 'none';
    carousel.style.transform = 'translateX(-150px)';
    setTimeout(() => {
        carousel.style.transition = 'transform 0.3s ease-in-out';
        carousel.style.transform = 'translateX(0)';
    }, 20);
}

function scrollRight() {
    carousel.style.transition = 'transform 0.3s ease-in-out';
    carousel.style.transform = 'translateX(-150px)';
    setTimeout(() => {
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
        carousel.appendChild(carousel.firstElementChild);
    }, 300);
}

