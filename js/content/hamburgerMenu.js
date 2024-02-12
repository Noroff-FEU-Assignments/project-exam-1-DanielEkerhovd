export function hamburgerMenu() {

    const hamburgerMenu = document.querySelector('.hamburger-button');
    const hamburgerList = document.querySelector('.hamburger-list');
    

    hamburgerMenu.addEventListener('click', () => {
        
        hamburgerList.classList.toggle('show')

        
        

    });

    window.addEventListener('click', function(event) {
        if (event.target != hamburgerMenu && event.target != hamburgerList) {
            hamburgerList.classList.remove('show')
        }
    });

};