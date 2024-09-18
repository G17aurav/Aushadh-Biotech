let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-button');
  const navMenu = document.querySelector('nav ul');

  menuButton.addEventListener('click', function () {
    navMenu.classList.toggle('active');
  });
});


const productContainer = document.getElementById('product-carousel');

//  JS function to build cards from data.js and render it to products section 
const renderProducts = () => {
  products.forEach(product => {
    const productCard = `
        <div class="card">
          <div class="img">
            <img src="${product.image}" alt="${product.alt}">
          </div>
          <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a href="https://drive.google.com/file/d/1Ysr9nazJo2SsjqrWxcxVdk4rfYb3SLj2/view?usp=sharing" target="_blank" class="link">Know More</a>
          </div>
        </div>
      `;
    productContainer.innerHTML += productCard;
  });
};

document.addEventListener('DOMContentLoaded', renderProducts);

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const feedback = document.getElementById('feedback').value;

  // Log the values to the console
  // console.log('First Name:', firstName);
  // console.log('Last Name:', lastName);
  // console.log('Email:', email);
  // console.log('Feedback:', feedback);


  form.reset();
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel")
  const arrowBtns = document.querySelectorAll(".wrapper i");
  const wrapper = document.querySelector(".wrapper");

  const firstCard = carousel.querySelector(".card");
  const firstCardWidth = firstCard.offsetWidth;

  let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;

    // Calculate the new scroll position
    const newScrollLeft = startScrollLeft - (e.pageX - startX);

    if (newScrollLeft <= 0 || newScrollLeft >=
      carousel.scrollWidth - carousel.offsetWidth) {

      isDragging = false;
      return;
    }

    carousel.scrollLeft = newScrollLeft;
  };
  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };

  const autoPlay = () => {

    // Return if window is smaller than 800
    if (window.innerWidth < 800) return;

    const totalCardWidth = carousel.scrollWidth;

    const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

    if (carousel.scrollLeft >= maxScrollLeft) return;

    // timeoutId = setTimeout(() => 
    //     carousel.scrollLeft += firstCardWidth, 2500);
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper.addEventListener("mouseenter", () =>
    clearTimeout(timeoutId));
  wrapper.addEventListener("mouseleave", autoPlay);

  // Add event listeners for the arrow buttons to 
  // scroll the carousel left and right
  arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.id === "left" ?
        -firstCardWidth : firstCardWidth;
    });
  });
});

// Get modal elements
const privacyPolicyModal = document.getElementById("privacyPolicyModal");
const returnPolicyModal = document.getElementById("returnPolicyModal");
const termsModal = document.getElementById("termsModal");

// Get button elements
const privacyPolicyBtn = document.getElementById("privacyPolicyBtn");
const returnPolicyBtn = document.getElementById("returnPolicyBtn");
const termsBtn = document.getElementById("termsBtn");

// Get the close buttons
const closeButtons = document.querySelectorAll(".close");

// Function to open a modal
function openModal(modal) {
  modal.style.display = "flex";
}

// Function to close a modal
function closeModal(modal) {
  modal.style.display = "none";
}

// Event listeners for opening modals
privacyPolicyBtn.addEventListener("click", () => openModal(privacyPolicyModal));
returnPolicyBtn.addEventListener("click", () => openModal(returnPolicyModal));
termsBtn.addEventListener("click", () => openModal(termsModal));

// Event listeners for closing modals
closeButtons.forEach(button => {
  button.addEventListener("click", function () {
    const modal = this.closest(".modal");
    closeModal(modal);
  });
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("modal")) {
    closeModal(event.target);
  }
});




let slideInd = 1;
showSlides2(slideInd);

function plusSlides(n) {
  showSlides2(slideInd += n);
}

function currentSlide(n) {
  showSlides2(slideInd = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideInd = 1 }
  if (n < 1) { slideInd = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideInd - 1].style.display = "block";
  dots[slideInd - 1].className += " active";
}