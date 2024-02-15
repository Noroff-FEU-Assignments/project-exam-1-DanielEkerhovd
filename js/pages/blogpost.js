
import { fetchDataByID } from "../api/sortByID.js";
import { checkingredients } from "../tools/checkIngredients.js";
import { returnToBlogs } from "../content/blogsReturn.js";
import { updateTitle } from "../tools/updateTitle.js";
import { createModal } from "../pages/createModal.js";
import { brewComponent } from "./components/brewIcons.js";
import { createInfo } from "./components/blogInfo.js";
import { changeParent } from "../tools/changeParent.js";

export function createBlogPostHtml(api) {

    returnToBlogs();

    const selectedPost = fetchDataByID(api);

    updateTitle(selectedPost.title.rendered);


    const blogPostContainer = document.querySelector('.blogpost-content');

    const blogpostHeroImg = document.createElement('img');
    blogpostHeroImg.classList.add('blogpost-hero-img');
    blogpostHeroImg.classList.add('hover-effect')
    blogpostHeroImg.id = 'hero-img';
    blogpostHeroImg.src = selectedPost.acf.title_image;
    blogpostHeroImg.alt = `Blog image - ${selectedPost.acf.title}`;
    blogPostContainer.appendChild(blogpostHeroImg);

    const blogpostTitle = document.createElement('div');
    blogpostTitle.classList.add('blogpost-title');
    blogPostContainer.appendChild(blogpostTitle);

    const blogpostTitleText = document.createElement('div');
    blogpostTitleText.classList.add('blogpost-title-text');
    blogpostTitle.appendChild(blogpostTitleText);

    const blogpostTitleH1 = document.createElement('h1');
    blogpostTitleH1.classList.add('big-title');
    blogpostTitleH1.textContent = selectedPost.title.rendered;
    blogpostTitleText.appendChild(blogpostTitleH1);

    const cardDivider = document.createElement('div');
    cardDivider.classList.add('card-divider');
    blogpostTitleText.appendChild(cardDivider);

    const blogpostDate = document.createElement('p');
    blogpostDate.classList.add('card-date');
    blogpostDate.classList.add('superlight-text');
    blogpostDate.textContent = selectedPost.acf.post_date;
    blogpostTitleText.appendChild(blogpostDate);

    const blogpostInformation = document.createElement('div');
    blogpostInformation.classList.add('blogpost-information');
    blogPostContainer.appendChild(blogpostInformation);

    const blogpostText = document.createElement('div');
    blogpostText.classList.add('blogpost-text');
    blogpostInformation.appendChild(blogpostText);

    const blogpostMedia = document.createElement('div');
    blogpostMedia.classList.add('blogpost-media');
    blogpostInformation.appendChild(blogpostMedia);

    const blogpostIntro = document.createElement('h2');
    blogpostIntro.classList.add('blogpost-intro');
    blogpostIntro.classList.add("medium-font");
    blogpostIntro.textContent = selectedPost.acf.title_text;
    blogpostText.appendChild(blogpostIntro);
    

    const blogpostMainImage = document.createElement('img');
    blogpostMainImage.classList.add('blogpost-main-image');
    blogpostMainImage.classList.add('hover-effect');
    blogpostMainImage.id = 'main-img';
    blogpostMainImage.src = selectedPost.acf.content_img;
    blogpostMainImage.alt = `Main image - ${selectedPost.acf.title}`;
    
    changeParent(blogpostMainImage, 1000);
    
    createInfo(selectedPost);
    
    const endImage = document.createElement('img');
    endImage.classList.add('blogpost-end-img');
    endImage.classList.add('hover-effect')
    endImage.id = 'end-img';
    endImage.src = selectedPost.acf.end_img;
    endImage.alt = `End image - ${selectedPost.acf.title}`;
    blogpostText.appendChild(endImage);

    const brewingIndicators = document.createElement('div');
    brewingIndicators.classList.add('brewing-indicators');
    blogpostText.appendChild(brewingIndicators);

    brewComponent(selectedPost, "yeast");
    brewComponent(selectedPost, "malt");
    brewComponent(selectedPost, "water");
    brewComponent(selectedPost, "hops");

    changeParent(brewingIndicators, 1000);

    createModal('.blogpost-content', 'hero');
    createModal('.blogpost-content', 'main');
    createModal('.blogpost-content', 'end');


}
