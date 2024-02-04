export function returnToBlogs () {
    const header = document.querySelector('.blogpost-content');

    const createBackButton = document.createElement('button');
    createBackButton.textContent = '< Back to Blogs';
    createBackButton.classList.add('backButton');
    header.appendChild(createBackButton);

    console.log('returnToBlogs');

    createBackButton.addEventListener('click', function() {
        history.back();
    });

}