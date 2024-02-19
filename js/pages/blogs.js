
import { maxTextLength } from '../tools/textLenght.js';
import { maxTitleLenght } from '../tools/textLenght.js';
import { makeTitleFontSmaller } from '../tools/textLenght.js';
import { createNewestPost } from './newestPost.js';
import { backToTop } from '../tools/backToTop.js';

export function createBlogHtml(api) {

    backToTop();

    const blogContainer = document.querySelector('.blog-posts');

    blogContainer.innerHTML = '';

    //Don't render the first blog post in the blog-post container
    const removedItem = api.shift();

    //Create the newest blog post
    createNewestPost(removedItem);

    function renderItems(api) {

        function createItems (api, i) {
            //Create the blog post card
            const blogPostCard = document.createElement('a');
            blogPostCard.href = `/blogpost.html?blogid=${api[i].id}`;
            blogPostCard.classList.add('blog-post-card');
            blogContainer.appendChild(blogPostCard);
    
            //Create the blog post div
            const blogPostDiv = document.createElement('div');
            blogPostDiv.classList.add('blog-post');
            blogPostCard.appendChild(blogPostDiv);
    
            //Create the blog post image
            const blogImage = document.createElement('img');
            blogImage.classList.add('carousell-image');
            blogImage.src = api[i].acf.title_image;
            blogImage.alt = `Blog image - ${api[i].title.rendered}`;
            blogPostDiv.appendChild(blogImage);
    
            //Create the blog post title section
            const blogTitleDiv = document.createElement('div');
            blogTitleDiv.classList.add('carousell-title');
            blogPostDiv.appendChild(blogTitleDiv);
    
            //Create the blog post title
            const blogTitle = document.createElement('h2');
            const title = api[i].title.rendered;
            const titleLenght = makeTitleFontSmaller(title);
            const finishedTitle = maxTitleLenght(title);
    
            blogTitle.classList.add(titleLenght);
            blogTitle.textContent = finishedTitle
            blogTitleDiv.appendChild(blogTitle);
    
            //Create the blog post title divider
            const cardDivider = document.createElement('div');
            cardDivider.classList.add('card-divider');
            blogTitleDiv.appendChild(cardDivider);
    
            //Create the blog post date
            const blogDate = document.createElement('p');
            blogDate.classList.add('card-date');
            blogDate.classList.add('superlight-text');
            blogDate.textContent = api[i].acf.post_date;
            blogTitleDiv.appendChild(blogDate);
    
            //Create the blog post text
            const blogText = document.createElement('p');
            const titleText = api[i].acf.title_text;
            const shortText = maxTextLength(titleText);
    
            blogText.classList.add('blog-text');
            blogText.classList.add('superlight-text');
            blogText.textContent = shortText
            blogPostDiv.appendChild(blogText);
        }

        for (let i = 0; i < 10; i++) {

            createItems(api, i);
        
        };  

        if (api.length > 10) {
            const moreButton = document.querySelector('.see-more-button')
            moreButton.addEventListener('click', () => {

            for (let i = 10; i < api.length; i++) {

            createItems(api, i);

            }

            moreButton.style.display = 'none';
            moreButton.disabled = true;
                
         });
        }

    };

    renderItems(api);

};
