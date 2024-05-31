function toggleMenu() {
    var navbar = document.getElementById("myLinks");
    navbar.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("learnMoreBtn").addEventListener("click", function() {
        // Slide the features to the left
        var features = document.querySelectorAll(".feature");
        features.forEach(function(feature) {
            feature.style.transform = "translateX(-100%)";
            feature.style.transition = "transform 0.5s ease";
        });

        // Redirect after sliding animation completes
        setTimeout(function() {
            window.location.href = "contact.html";
        }, 500); // Adjust this time according to your transition duration
    });
});






//slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// Optional: if you want to control the marquee with JavaScript instead of CSS
document.addEventListener("DOMContentLoaded", function() {
    const marquee = document.querySelector('.marquee');
    let marqueeContent = marquee.innerHTML;
    marquee.innerHTML = marqueeContent + marqueeContent; // Duplicate content for seamless looping
});
//slider

// JavaScript for slideshow functionality