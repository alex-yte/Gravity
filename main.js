
const container = document.getElementById("slider__img_wrapper");
// where "container" is the id of the container
  container.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      container.scrollLeft += 100;
      e.preventDefault();
// prevenDefault() will help avoid worrisome 
// inclusion of vertical scroll 
    }
    else {
      container.scrollLeft -= 100;
      e.preventDefault();
    }
  });
