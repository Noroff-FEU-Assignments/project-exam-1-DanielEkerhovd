export function changeParent(childSelector, screenWidth) {

    let resizeTimer;

    const blogText = document.querySelector('.blogpost-text');
    const blogMedia = document.querySelector('.blogpost-media');

    const nowWidth = window.innerWidth;

    if (screenWidth <= nowWidth) {
        blogMedia.appendChild(childSelector);
    } else {
        blogText.appendChild(childSelector);
    };

    window.addEventListener('resize', () => {

        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {

            const blogText = document.querySelector('.blogpost-text');
            const blogMedia = document.querySelector('.blogpost-media');
            const currentWidth = window.innerWidth;

            if (childSelector) {
                if (screenWidth <= currentWidth) {
                   
                    blogMedia.appendChild(childSelector);

                } else {

                    if (childSelector.id === 'main-img') {
                        const secondChild = blogText.childNodes[1];
                        blogText.insertBefore(childSelector, secondChild);
                    } else {
                        blogText.appendChild(childSelector);
                    }
                    
                }
            }

        }, 50);
    });

};