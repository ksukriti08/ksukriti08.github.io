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

// Ensure the first trip's content is visible on load
window.onload = function() {
    document.getElementById('trip1').style.display = 'block';
    document.getElementById('trip1').classList.add('active');
    document.getElementsByClassName('tab-button')[0].classList.add('active');
};




function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}


function scrollLeft(button) {
    const gallery = button.closest('.cute-garden-gallery');
    const carouselWrapper = gallery.querySelector('.carousel-wrapper');
    carouselWrapper.scrollLeft -= 150;
}

function scrollRight(button) {
    const gallery = button.closest('.cute-garden-gallery');
    const carouselWrapper = gallery.querySelector('.carousel-wrapper');
    carouselWrapper.scrollLeft += 150;
}

document.querySelectorAll('.research-item').forEach(item => {
    item.addEventListener('click', () => {
      const desc = item.querySelector('.description');
      desc.style.opacity = desc.style.opacity === '1' ? '0' : '1';
    });
  });
  








