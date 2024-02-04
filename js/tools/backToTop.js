export function backToTop() {
    const backToTopButton = document.querySelector('.back-up');
    backToTopButton.addEventListener('click', function() {
        window.scroll({top: 0, behavior: "smooth"})
    });
}