import { modalControlls } from '../tools/modal.js'

export function createModal (container, location, api) {

    const modalContainer = document.querySelector(container);

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = `${location}Modal`;
    modalContainer.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);

    const modalImage = document.createElement('img');
    modalImage.classList.add('modal-image');
    modalImage.id = `${location}Image`;
    modalContent.appendChild(modalImage);

    const modalText = document.createElement('div');
    modalText.classList.add('modal-text');
    modalText.id = 'modalText';
    modalContent.appendChild(modalText);

    const modalTitle = document.createElement('h2');
    modalTitle.classList.add('modal-title');
    modalTitle.id = 'modalTitle';
    const textEndpoint = `${location}_img_alt`;
    const text = api.acf[textEndpoint];
    modalTitle.textContent = text;
    modalText.appendChild(modalTitle);

    const close = document.createElement('span');
    close.classList.add('close');
    close.classList.add('small-title');
    close.id = `${location}Close`;
    close.innerHTML = 'CLOSE';
    modalContent.appendChild(close);

    modalControlls(location);
};