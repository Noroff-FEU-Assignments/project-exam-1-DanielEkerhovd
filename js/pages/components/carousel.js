export function carousel() {

    
   const track = document.querySelector('.carousell');
   let position = 0;

   const leftButton = document.querySelector('.prev');
   const rightButton = document.querySelector('.next');    

   function currentWidth() {
        const width = window.innerWidth

        if (width < 600) {
            return 1;
        } else if (width < 900) {
            return 2;
        } else if (width < 1200) {
            return 3;
        } else {
            return 4;
        }
   }

   function moveSlide() {
       const slideWidth = document.querySelector('.carousell-link').clientWidth;
       track.style.transform = `translateX(${position}px)`;

         if (position === 0) {
              leftButton.disabled = true;
         } else {
              leftButton.disabled = false;
         }
   };

    function moveRight() {

        const screenWidth = currentWidth();
        const widthMargin = 20;

         const slideWidth = document.querySelector('.carousell-link').clientWidth;
         const slides = document.querySelectorAll('.carousell-link');
         const slidesLength = slides.length
         const maxPosition = -slideWidth * (slidesLength - screenWidth);
         
         if (position > maxPosition) {
              position -= (slideWidth + widthMargin) * screenWidth;
              moveSlide();
         } else {
              position = 0;
              moveSlide();
         }
    };

    function moveLeft() {

        const screenWidth = currentWidth();
        const widthMargin = 20;

         const slideWidth = document.querySelector('.carousell-link').clientWidth;
         const slides = document.querySelectorAll('.carousell-link');
         const slidesLength = slides.length;
         const maxPosition = -slideWidth * (slidesLength - screenWidth);

         if (position < 0) {
              position += (slideWidth + widthMargin) * screenWidth;
              moveSlide();
         } else {
              position = slideWidth;
              moveSlide();
         }
    };

    leftButton.addEventListener('click', moveLeft);
    rightButton.addEventListener('click', moveRight);

    if (position === 0) {
        leftButton.disabled = true;
    }

}