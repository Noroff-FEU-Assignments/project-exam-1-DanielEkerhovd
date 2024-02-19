export function createInfo (api) {

    const blogPostText = document.querySelector('.blogpost-text');


    for (let i = 1; i < 5; i++) {

        if (!api.acf[`content_title_${i}`]) {
            break;
        }

        let blogpostInfo = document.createElement('div');
        blogpostInfo.classList.add(`blogpost-info-${i}`);
        blogPostText.appendChild(blogpostInfo);
    
        let blogpostContent = document.createElement('h3');
        blogpostContent.classList.add('xsmall-title');
        blogpostContent.classList.add('blogpost-info-title');
        blogpostContent.textContent = api.acf[`content_title_${i}`];
        blogpostInfo.appendChild(blogpostContent);
    
        let text = document.createElement('p');
        text.classList.add('superlight-text');
        text.textContent = api.acf[`content_${i}`];
        blogpostInfo.appendChild(text);

    }
   
}