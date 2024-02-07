import { maxTextLength } from "../tools/textLenght.js";
import { maxTitleLenght } from "../tools/textLenght.js";
import { makeTitleFontSmaller } from "../tools/textLenght.js";

export function createCarousellContent (api) {
    const carousell = document.querySelector('.carousell')

    api.forEach(async (api) => {
        
        const carousellLink = document.createElement('a');
        carousellLink.href = `/blogpost.html?blogid=${api.id}`;
        carousellLink.classList.add('carousell-link');
        carousell.appendChild(carousellLink);

        const carousellItems = document.createElement('div');
        carousellItems.classList.add('carousell-item');
        carousellLink.appendChild(carousellItems);

        const carousellImage = document.createElement('img');
        carousellImage.classList.add('carousell-image');
        carousellImage.src = api.acf.title_image;
        carousellImage.alt = `Blog image - ${api.title.rendered}`;
        carousellItems.appendChild(carousellImage);

        const carousellTitle = document.createElement('div');
        carousellTitle.classList.add('carousell-title');    
        carousellItems.appendChild(carousellTitle);

        const carousellTitleText = document.createElement('h2');
        const title = api.title.rendered;
        carousellTitleText.classList.add('small-title');
        carousellTitleText.classList.add('carousell-title-text');
        const shorterTitle = maxTitleLenght(title, 22);
        carousellTitleText.textContent = shorterTitle;
        carousellTitle.appendChild(carousellTitleText);

        const carousellDivider = document.createElement('div');
        carousellDivider.classList.add('card-divider');
        carousellTitle.appendChild(carousellDivider);

        const carousellDate = document.createElement('p');
        carousellDate.classList.add('card-date');
        carousellDate.classList.add('superlight-text');
        carousellDate.textContent = api.acf.post_date;
        carousellTitle.appendChild(carousellDate);

        const carousellText = document.createElement('div');
        carousellText.classList.add('carousell-text');
        carousellText.classList.add('light-text');
        carousellItems.appendChild(carousellText);

        const carousellTextText = document.createElement('p');
        const titleText = api.acf.title_text;
        const shortText = maxTextLength(titleText, 24);
        carousellTextText.textContent = shortText;
        carousellText.appendChild(carousellTextText);


    });
    
}