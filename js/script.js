let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};



document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});


//counters
document.addEventListener('DOMContentLoaded', () => {
   const counters = document.querySelectorAll('.counter');

   const startCounting = (counter) => {
       const updateCounter = () => {
           const target = +counter.getAttribute('data-target');
           const current = +counter.innerText.replace('+', ''); // Remove "+" for accurate calculation
           const increment = target / 400; // Slower speed

           if (current < target) {
               counter.innerText = `${Math.ceil(current + increment)}+`; // Add "+" after current number
               setTimeout(updateCounter, 80); // Slower delay
           } else {
               counter.innerText = `${target}+`; // Ensure it reaches the target with "+"
           }
       };

       updateCounter();
   };

   const observer = new IntersectionObserver((entries, observer) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               startCounting(entry.target); // Start counting when in view
               observer.unobserve(entry.target); // Stop observing after it triggers
           }
       });
   }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

   counters.forEach(counter => {
       observer.observe(counter); // Observe each counter element
   });
});


var reviewsSlider = new Swiper(".reviews-slider", {
   loop: true,
   grabCursor: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   autoplay: {
     delay: 3000, // 3 seconds delay
     disableOnInteraction: false,
   },
   spaceBetween: 20,
   breakpoints: {
     640: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     991: {
       slidesPerView: 3,
     },
   },
 });

 

       