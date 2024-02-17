export function modalControlls (location) {
    const modal = document.getElementById(`${location}Modal`);
    const modalImage = document.getElementById(`${location}Image`);
    const image = document.getElementById(`${location}-img`);

    image.onclick = function() {
        modal.style.display = "block";
        modalImage.src = this.src;
        modalTitle.textContent = this.alt;
    }

    const close = document.getElementById(`${location}Close`);
    close.onclick = function() {
        modal.style.display = "none";
    }

    window.addEventListener('click', function(event) {
        if (event.target == modal || event.target == modalImage) {
            modal.style.display = "none";
        }
    });
    
}