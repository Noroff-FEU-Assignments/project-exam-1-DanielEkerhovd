export function shrinkHeader() {
    
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.querySelector('header').style.height = "90px";
            
        } else {
            
            document.querySelector('header').style.height = "130px";

        }
    }
}