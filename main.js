// const container = document.getElementById("slider__img_wrapper");
// container.addEventListener("wheel", function (e) {
//   if (e.deltaY > 0) {
//     container.scrollLeft += 100;
//     e.preventDefault();
//   }
//   else {
//     container.scrollLeft -= 100;
//     e.preventDefault();
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  let loaders = document.querySelectorAll('.loader');
  //set display none
  document.querySelectorAll('.hero__img_container img')[1].style.display = "none";
  
  loaders.forEach((item, index) => {
    item.addEventListener('click', () => {
      loaders.forEach(loader => {
        loader.classList.remove('active');
        document.querySelectorAll('.hero__description').forEach(item=>{
          item.classList.remove('active');
        })
        document.querySelectorAll('.hero__heading').forEach(item=>{
          item.classList.remove('active');
        })
      });
      document.querySelectorAll('.hero__heading')[index].classList.add('active');
      document.querySelectorAll('.hero__description')[index].classList.add('active');
      item.classList.add('active');

      document.querySelector('.hero__img_container').setAttribute('move-right', '');
      document.querySelector('.hero__img_container').addEventListener('animationend', () => {
        document.querySelectorAll('.hero__img_container img').forEach(item => {
          item.style.display = "none";
        });
        document.querySelectorAll('.hero__img_container img')[index].style.display = "block";
        document.querySelector('.hero__img_container').removeAttribute('move-right');
        document.querySelector('.hero__img_container').setAttribute('move-left', '');
        document.querySelector('.hero__img_container').addEventListener('animationend', () => {
          document.querySelector('.hero__img_container').removeAttribute('move-left');
        });
      });

    });

    item.addEventListener('animationend', () => {
      
      item.classList.remove('active');
      
        document.querySelectorAll('.hero__heading').forEach(item => {
          item.classList.remove('active');
        });

        // Remove 'active' class from all elements with class 'hero__description'
        document.querySelectorAll('.hero__description').forEach(item => {
          item.classList.remove('active');
        });

        // Determine the next index for 'loaders'
        let nextIndex = (index < loaders.length - 1) ? index + 1 : 0;

        // Add 'active' class to the next loader element
        loaders[nextIndex].classList.add('active');
        
        document.querySelector('.hero__img_container').setAttribute('move-right', '');
        document.querySelector('.hero__img_container').addEventListener('animationend', () => {
          document.querySelector('.hero__img_container').removeAttribute('move-right');
          document.querySelectorAll('.hero__img_container img')[nextIndex].style.display = "block";
          document.querySelectorAll('.hero__img_container img')[index].style.display = "none";
          document.querySelector('.hero__img_container').setAttribute('move-left', '');
          document.querySelector('.hero__img_container').addEventListener('animationend', () => {
            document.querySelector('.hero__img_container').removeAttribute('move-left');
          });
        })
        

        // Add 'active' class to the corresponding 'hero__heading' and 'hero__description' elements
        document.querySelectorAll('.hero__heading')[nextIndex].classList.add('active');
        document.querySelectorAll('.hero__description')[nextIndex].classList.add('active');

    });
  });

  const swiper = new Swiper('.slider__img_wrapper', {
    // Optional parameters
    loop: false,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    rewind: true,
    grabCursor: true,
  
    // Navigation arrows
    navigation: {
      nextEl: 'button.services_next',
      prevEl: 'button.services_prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const testimonial_image = new Swiper('.testimonials_slide', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
      nextEl: ".testimonial_next",
      prevEl: ".testimonial_prev",
    },
  });

});
