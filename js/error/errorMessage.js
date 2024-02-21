export function createErrorMessage (message, element) {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = error;
    element.appendChild(errorMessage);
}