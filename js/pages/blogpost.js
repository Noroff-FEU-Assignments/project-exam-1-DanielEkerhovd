
import { fetchDataByID } from "../api/sortByID.js";
import { checkingredients } from "../tools/checkIngredients.js";
import { returnToBlogs } from "../content/blogsReturn.js";

export function createBlogPostHtml(api) {

    returnToBlogs();

    const selectedPost = fetchDataByID(api);

    console.log(selectedPost.acf);

    const blogPostContainer = document.querySelector('.blogpost-content');

    const blogpostHeroImg = document.createElement('img');
    blogpostHeroImg.classList.add('blogpost-hero-img');
    blogpostHeroImg.src = selectedPost.acf.title_image;
    blogpostHeroImg.alt = `Blog image - ${selectedPost.title}`;
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

    const blogpostIntro = document.createElement('h2');
    blogpostIntro.classList.add('blogpost-intro');
    blogpostIntro.classList.add("medium-font");
    blogpostIntro.textContent = selectedPost.acf.title_text;
    blogpostText.appendChild(blogpostIntro);

    const blogpostInfo1 = document.createElement('div');
    blogpostInfo1.classList.add('blogpost-info-1');
    blogpostText.appendChild(blogpostInfo1);

    const blogpostContent1 = document.createElement('h3');
    blogpostContent1.classList.add('xsmall-title');
    blogpostContent1.textContent = selectedPost.acf.content_title_1;
    blogpostInfo1.appendChild(blogpostContent1);

    const blogpostText1 = document.createElement('p');
    blogpostText1.classList.add('superlight-text');
    blogpostText1.textContent = selectedPost.acf.content_1;
    blogpostInfo1.appendChild(blogpostText1);

    if (selectedPost.acf.content_title_2) {
    const blogpostInfo2 = document.createElement('div');
    blogpostInfo1.classList.add('blogpost-info-2');
    blogpostText.appendChild(blogpostInfo2);

    const blogpostContent2 = document.createElement('h3');
    blogpostContent2.classList.add('xsmall-title');
    blogpostContent2.textContent = selectedPost.acf.content_title_2;
    blogpostInfo2.appendChild(blogpostContent2);

    const blogpostText2 = document.createElement('p');
    blogpostText2.classList.add('superlight-text');
    blogpostText2.textContent = selectedPost.acf.content_2;
    blogpostInfo2.appendChild(blogpostText2);

    }

    if (selectedPost.acf.content_title_3) {
    const blogpostInfo3 = document.createElement('div');
    blogpostInfo3.classList.add('blogpost-info-3');
    blogpostText.appendChild(blogpostInfo3);

    const blogpostContent3 = document.createElement('h3');
    blogpostContent3.classList.add('xsmall-title');
    blogpostContent3.textContent = selectedPost.acf.content_title_3;
    blogpostInfo3.appendChild(blogpostContent3);

    const blogpostText3 = document.createElement('p');
    blogpostText3.classList.add('superlight-text');
    blogpostText3.textContent = selectedPost.acf.content_3;
    blogpostInfo3.appendChild(blogpostText3);
    }

    if (selectedPost.acf.content_title_4) {
        const blogpostInfo4 = document.createElement('div');
        blogpostInfo4.classList.add('blogpost-info-4');
        blogpostText.appendChild(blogpostInfo4);

        const blogpostContent4 = document.createElement('h3');
        blogpostContent4.classList.add('xsmall-title');
        blogpostContent4.textContent = selectedPost.acf.content_title_4;
        blogpostInfo4.appendChild(blogpostContent4);

        const blogpostText4 = document.createElement('p');
        blogpostText4.classList.add('superlight-text');
        blogpostText4.textContent = selectedPost.acf.content_4;
        blogpostInfo4.appendChild(blogpostText4);
    }

    if (selectedPost.acf.content_title_5) {
        const blogpostInfo5 = document.createElement('div');
        blogpostInfo5.classList.add('blogpost-info-5');
        blogpostText.appendChild(blogpostInfo5);

        const blogpostContent5 = document.createElement('h3');
        blogpostContent5.classList.add('xsmall-title');
        blogpostContent5.textContent = selectedPost.acf.content_title_5;
        blogpostInfo5.appendChild(blogpostContent5);

        const blogpostText5 = document.createElement('p');
        blogpostText5.classList.add('superlight-text');
        blogpostText5.textContent = selectedPost.acf.content_5;
        blogpostInfo5.appendChild(blogpostText5);
    }
    
    const endImage = document.createElement('img');
    endImage.classList.add('blogpost-end-img');
    endImage.src = selectedPost.acf.end_img;
    endImage.alt = `End image - ${selectedPost.title}`;
    blogpostText.appendChild(endImage);

    // <div class="blogpost-media">
    //                     <img class="blogpost-main-image" src="/media/images/hops-brewing.jpg" alt="">
    //                     <div class="brewing-indicators">
    //                         <div class="yeast">
    //                             <p class="brew-type yeast-type small-title">Yeast</p>
    //                             <img class="ingredient-icon" src="/media/icons/yeast-orange.png" alt="">
    //                         </div>
    //                         <div class="water">
    //                             <p class="brew-type water-type small-title">Water</p>
    //                             <img class="ingredient-icon" src="/media/icons/water-blue.png" alt="">
    //                         </div>
    //                         <div class="hops">
    //                             <p class="brew-type hops-type small-title">Hops</p>
    //                             <img class="ingredient-icon" src="/media/icons/hops-green.png" alt="">
    //                         </div>
    //                         <div class="malt">
    //                             <p class="brew-type malt-type small-title">Malt</p>
    //                             <img class="ingredient-icon" src="/media/icons/wheat-yellow.png" alt="">
    //                         </div>
    //                     </div>
    //                 </div>

    const blogpostMedia = document.createElement('div');
    blogpostMedia.classList.add('blogpost-media');
    blogpostInformation.appendChild(blogpostMedia);

    const blogpostMainImage = document.createElement('img');
    blogpostMainImage.classList.add('blogpost-main-image');
    blogpostMainImage.src = selectedPost.acf.content_img;
    blogpostMainImage.alt = `Main image - ${selectedPost.title}`;
    blogpostMedia.appendChild(blogpostMainImage);

    const brewingIndicators = document.createElement('div');
    brewingIndicators.classList.add('brewing-indicators');
    blogpostMedia.appendChild(brewingIndicators);

    const yeast = document.createElement('div');
    yeast.classList.add('yeast');
    brewingIndicators.appendChild(yeast);

    const yeastType = document.createElement('p');
    yeastType.classList.add('brew-type');
    yeastType.classList.add('yeast-type');
    yeastType.classList.add('small-title');
    const yeastInfo = selectedPost.acf.yeast_type;
    const checkedYeast = checkingredients(yeastInfo, "Hops");
    yeastType.textContent = checkedYeast;
    yeast.appendChild(yeastType);

    const yeastIcon = document.createElement('img');
    yeastIcon.classList.add('ingredient-icon');
    yeastIcon.src = '/media/icons/yeast-orange.png';
    yeastIcon.alt = 'Yeast icon';
    yeast.appendChild(yeastIcon);

    const water = document.createElement('div');
    water.classList.add('water');
    brewingIndicators.appendChild(water);

    const waterType = document.createElement('p');
    waterType.classList.add('brew-type');
    waterType.classList.add('water-type');
    waterType.classList.add('small-title');
    const waterInfo = selectedPost.acf.water_type;
    const checkedWater = checkingredients(waterInfo, "Water");
    waterType.textContent = checkedWater;
    water.appendChild(waterType);

    const waterIcon = document.createElement('img');
    waterIcon.classList.add('ingredient-icon');
    waterIcon.src = '/media/icons/water-blue.png';
    waterIcon.alt = 'Water icon';
    water.appendChild(waterIcon);

    const hops = document.createElement('div');
    hops.classList.add('hops');
    brewingIndicators.appendChild(hops);

    const hopsType = document.createElement('p');
    hopsType.classList.add('brew-type');
    hopsType.classList.add('hops-type');
    hopsType.classList.add('small-title');
    const hopsInfo = selectedPost.acf.hops_type;
    const checkedHops = checkingredients(hopsInfo, "Hops");
    hopsType.textContent = checkedHops;
    hops.appendChild(hopsType);

    const hopsIcon = document.createElement('img');
    hopsIcon.classList.add('ingredient-icon');
    hopsIcon.src = '/media/icons/hops-green.png';
    hopsIcon.alt = 'Hops icon';
    hops.appendChild(hopsIcon);

    const malt = document.createElement('div');
    malt.classList.add('malt');
    brewingIndicators.appendChild(malt);

    const maltType = document.createElement('p');
    maltType.classList.add('brew-type');
    maltType.classList.add('malt-type');
    maltType.classList.add('small-title');
    const maltInfo = selectedPost.acf.malt_type;
    const checkedMalt = checkingredients(maltInfo, "Malt");
    maltType.textContent = checkedMalt;
    malt.appendChild(maltType);

    const maltIcon = document.createElement('img');
    maltIcon.classList.add('ingredient-icon');
    maltIcon.src = '/media/icons/wheat-yellow.png';
    maltIcon.alt = 'Malt icon';
    malt.appendChild(maltIcon);

}
