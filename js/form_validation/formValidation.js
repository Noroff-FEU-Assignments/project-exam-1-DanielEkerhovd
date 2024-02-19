export function formValidation() {

    const form = document.querySelector('.contact-form form');
    const errorLabel = document.querySelectorAll('.error-label');

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const subject = document.querySelector('#subject');
    const message = document.querySelector('#message');
    const age = document.querySelector('#terms');

    console.log(email.validity.valid);

    const errorName = document.querySelector('.error-name');
    const errorEmail = document.querySelector('.error-email');
    const errorSubject = document.querySelector('.error-subject');
    const errorMessage = document.querySelector('.error-message');
    const errorAge = document.querySelector('.error-age');

    const errorText = document.querySelectorAll('.error-text');

    console.log(form);

    form.addEventListener('submit', (event) => {

        errorLabel.forEach(label => {
            label.classList.add('hide');
        });
        errorText.innerHTML = '';

        let errorStatus = false;
        let messages = []
        if (name.value.trim().length <= 5) {
            
            errorName.classList.remove('hide');
            messages.push('Name must be at least 6 characters long');
            errorStatus = true;
        } else {
            messages.push('');
        }

        if (!email.validity.valid) {
            errorEmail.classList.remove('hide');
            messages.push('Email is required')
            errorStatus = true;
        } else {
            messages.push('');
        }

        if (subject.value.trim().length <= 15) {
            errorSubject.classList.remove('hide');
            messages.push('Subject must be at least 16 characters long')
            errorStatus = true;
        } else {
            messages.push('');
        }

        if (message.value.trim().length <= 25){
            errorMessage.classList.remove('hide');
            messages.push('Message must be at least 26 characters long')
            errorStatus = true;
        } else {
            messages.push('');
        }

        if (age.checked == false) { 
            errorAge.classList.remove('hide');
            messages.push('You must be 18 years or older to submit this form')
            errorStatus = true;
        } else {
            messages.push('');
        }
        

        if (errorStatus) {
            errorText.forEach((text, index) => {
                text.innerHTML = messages[index];
            });

            event.preventDefault()
        }
    });
}