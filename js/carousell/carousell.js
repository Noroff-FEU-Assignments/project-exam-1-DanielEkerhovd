export function indexCarousell() {
    const carousellItem = document.querySelectorAll('.carousell-item');
    const carousell = document.querySelector('.carousell');
    const nextItem = document.querySelector('#next-carousell');
    const previousItem = document.querySelector('#prev-carousell');

    function next() {
        
        carousell.scrollBy({
            left: 640,
            behavior: 'smooth'
        }); 
    }

    function previous() {
        carousell.scrollBy({
            left: -640,
            behavior: 'smooth'
        });
    }

    nextItem.addEventListener('click', next);
    previousItem.addEventListener('click', previous);
    
}