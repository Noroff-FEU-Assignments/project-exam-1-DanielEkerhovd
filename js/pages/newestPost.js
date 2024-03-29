import { maxTextLength } from "../tools/textLenght.js";
import { updateTextWidth } from "../tools/updateTextWidth.js";

export function createNewestPost(api) {

    const newBlogContainer = document.querySelector('.blogs-content');

    //Create the blog post card
    const blogPostCard = document.createElement('a');
    blogPostCard.href = `/blogpost.html?blogid=${api.id}`;
    blogPostCard.classList.add('new-post-link');
    newBlogContainer.prepend(blogPostCard);
    
    //Create the blog post div
    const blogPostDiv = document.createElement('div');
    blogPostDiv.classList.add('newest-post');
    blogPostCard.appendChild(blogPostDiv);

    //Create the blog post image
    const blogImage = document.createElement('img');
    blogImage.src = api.acf.title_image;
    blogImage.alt = `Blog image - ${api.title.rendered}`;
    blogPostDiv.appendChild(blogImage);

    //Create the blog post title section
    const blogTitleDiv = document.createElement('div');
    blogTitleDiv.classList.add('newest-post-title');
    blogPostDiv.appendChild(blogTitleDiv);

    //Create the blog post title
    const blogTitle = document.createElement('h2');
    const title = api.title.rendered;
    blogTitle.classList.add('big-title');
    blogTitle.textContent = title
    blogTitleDiv.appendChild(blogTitle);

    //Create the blog post title divider
    const cardDivider = document.createElement('div');
    cardDivider.classList.add('card-divider');
    blogTitleDiv.appendChild(cardDivider);

    //Create the blog post date
    const blogDate = document.createElement('p');
    blogDate.classList.add('card-date');
    blogDate.classList.add('superlight-text');
    blogDate.textContent = api.acf.post_date;
    blogTitleDiv.appendChild(blogDate);

    //Create the blog post text div
    const newBlogText = document.createElement('div');
    newBlogText.classList.add('new-blog-text');
    newBlogText.classList.add('light-text');
    blogPostDiv.appendChild(newBlogText);

    //Create the blog post text
    const blogText = document.createElement('p');
    blogText.classList.add('new-p');
    const text = api.acf.title_text;
    if (window.innerWidth <= 600) {
        const shorterText = maxTextLength(text);
        blogText.textContent = shorterText;
    } else {    
        blogText.textContent = text;
    };
    newBlogText.appendChild(blogText);

    updateTextWidth('.new-p', text, '.new-blog-text')

    const newPostIcon = document.createElement('img');
    newPostIcon.src = '/media/icons/new.png';
    newPostIcon.alt = 'New blog post icon';
    newPostIcon.classList.add('new-post-tag');
    newBlogText.appendChild(newPostIcon);

};