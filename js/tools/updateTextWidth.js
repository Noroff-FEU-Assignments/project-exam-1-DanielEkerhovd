import { maxTextLength } from "./textLenght.js";

export function updateTextWidth (className, text, parent) {

    let timer;
    window.addEventListener('resize', () => {

        clearTimeout(timer);
        timer = setTimeout(() => {

            const parentContainer = document.querySelector(parent);
            const data = text
            const container = document.querySelector(className);
            const currentWidth = window.innerWidth;

            if (currentWidth > 600) {
                container.innerText = data;
            } else {
                container.innerText = maxTextLength(data);
            }
            parentContainer.insertBefore(container, parentContainer.firstChild);

        }, 50);

    });


}