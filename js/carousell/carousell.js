export function indexCarousell() {
    const carousell = document.querySelector('.carousell');
    const nextItem = document.querySelector('#next-carousell');
    const previousItem = document.querySelector('#prev-carousell');


    function next() {
        
        carousell.scrollBy({
            left: 960,
            behavior: 'smooth'
        }); 
    }

    function previous() {
        carousell.scrollBy({
            left: -10000,
            behavior: 'smooth'
        });
    }

    nextItem.addEventListener('click', next);
    previousItem.addEventListener('click', previous);
    
}