// Purpose: To display the blog posts on the blog page.
/* <a href="/html/blogpost.html" class="blog-post-card">
    <div class="blog-post">
        <img class="carousell-image" src="/media/images/holding-hops.jpg" alt="Blog image">
        <div class="carousell-title">
            <h2 class="small-title">HOPS</h2>
            <div class="card-divider"></div>
            <p class="card-date superlight-text">18/01/24</p>
        </div>
        <div class="new-blog-text light-text">
            <p>Welcome, beer enthusiasts, to the heart of the brewing process, where botanical magic meets malty alchemy. In the world of craft beer, few ingredients are as celebrated and essential as hops.
            </p>
        </div>
    </div>
</a> */

import { fetchData } from '../api/apicall.js';
import { apiURL } from '../api/url.js';
import { maxTextLength } from '../tools/textLenght.js';
import { maxTitleLenght } from '../tools/textLenght.js';
import { makeTitleFontSmaller } from '../tools/textLenght.js';

const apiCalled = await fetchData(apiURL);

const blogContainer = document.querySelector('.blog-posts');

const createBlogPost = (blogPost) => {

    //Create the blog post card
    const blogPostCard = document.createElement('a');
    blogPostCard.href = `/html/blogpost.html?blogid=${blogPost.id}`;
    blogPostCard.classList.add('blog-post-card');
    blogContainer.appendChild(blogPostCard);

    //Create the blog post div
    const blogPostDiv = document.createElement('div');
    blogPostDiv.classList.add('blog-post');
    blogPostCard.appendChild(blogPostDiv);

    //Create the blog post image
    const blogImage = document.createElement('img');
    blogImage.classList.add('carousell-image');
    blogImage.src = blogPost.acf.title_image;
    blogImage.alt = `Blog image - ${blogPost.title.rendered}`;
    blogPostDiv.appendChild(blogImage);

    //Create the blog post title section
    const blogTitleDiv = document.createElement('div');
    blogTitleDiv.classList.add('carousell-title');
    blogPostDiv.appendChild(blogTitleDiv);

    //Create the blog post title
    const blogTitle = document.createElement('h2');
    const title = blogPost.title.rendered;
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
    blogDate.textContent = blogPost.acf.post_date;
    blogTitleDiv.appendChild(blogDate);

    //Create the blog post text
    const blogText = document.createElement('div');
    const titleText = blogPost.acf.title_text;
    const shortText = maxTextLength(titleText);

    blogText.classList.add('blog-text');
    blogText.classList.add('light-text');
    blogText.textContent = shortText
    blogPostDiv.appendChild(blogText);
}

apiCalled.forEach(blogPost => {
    createBlogPost(blogPost);
});




