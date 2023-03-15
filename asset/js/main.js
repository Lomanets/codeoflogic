'use strict';

const formElement = document.querySelector('.form-item');

formElement.addEventListener('submit', element => {
    element.preventDefault();
    const fromData = new FormData(formElement);
    const phone = fromData.get('phone');
    const email = fromData.get('email');
    const comment = fromData.get('comment');

})