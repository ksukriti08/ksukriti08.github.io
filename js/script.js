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