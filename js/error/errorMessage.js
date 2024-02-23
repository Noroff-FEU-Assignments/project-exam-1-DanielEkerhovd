export function createErrorMessage (message, element) {

    const container = document.querySelector(element)
    container.innerHTML = '';
    
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-display');
    errorMessage.textContent = message;
    container.appendChild(errorMessage);

}