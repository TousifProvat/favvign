//Navbar & menu
const navLinkContainer = document.querySelector('.nav-links-container');
const navHeader = document.querySelector('header');

const headerBackChange = () => {
  if (window.pageYOffset > 760) {
    navHeader.style.backgroundColor = '#322864 ';
  } else {
    navHeader.style.backgroundColor = 'transparent ';
  }
};

//Change logo if the screen size is below 800px

const Logo = document.querySelector('.logo img');

if (window.screen.width < 800) {
  Logo.src = './assets/Logo-small.png';
} else {
  Logo.src = './assets/Logo.png';
}

window.onscroll = () => {
  headerBackChange();
};

window.onload = () => {
  testimonialNavigator();
};

//Testimonial Slider
const testimonialLeft = document.getElementById('t-arrow-left');
const testimonialRight = document.getElementById('t-arrow-right');
const testimonialSlides = document.querySelectorAll('.testimonialSlide');

const testimonialNavigator = () => {
  let counter = 0;
  testimonialRight.onclick = () => {
    counter++;

    if (counter > testimonialSlides.length - 1) {
      counter = 0;
    }

    testimonialSlides.forEach((slide) => (slide.checked = false));
    testimonialSlides[counter].checked = true;
  };

  testimonialLeft.onclick = () => {
    counter--;

    if (counter < 0) {
      counter = 8;
    }

    testimonialSlides.forEach((slide) => (slide.checked = false));
    testimonialSlides[counter].checked = true;
  };
};

//Carousel
let sliderOptions;

if (window.screen.width < 590) {
  sliderOptions = {
    indicators: true,
    dist: -150,
    numVisible: 3,
    shift: -40,
  };
} else {
  sliderOptions = {
    indicators: true,
    dist: -60,
    numVisible: 3,
    shift: -80,
  };
}

$(document).ready(function () {
  $('.carousel').carousel(sliderOptions);
});

//Smooth scroll
$('a').on('click', function (event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== '') {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      }
    );
  } // End if
});
