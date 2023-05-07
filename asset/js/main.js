'use strict';

// window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };
// formbutton("create", {
//     action: "https://formspree.io/f/xwkjqwwg",
//     title: "How can we help?",
//     fields: [
//         {
//             type: "email",
//             label: "Email:",
//             name: "email",
//             required: true,
//             placeholder: "your@email.com"
//         },
//         {
//             type: "textarea",
//             label: "Message:",
//             name: "message",
//             placeholder: "What's on your mind?",
//         },
//         { type: "submit" }
//     ],
//     styles: {
//         title: {
//             backgroundColor: "gray"
//         },
//         button: {
//             backgroundColor: "gray"
//         }
//     }
// });
const mobile = document.querySelector('.container-mobile');

document.querySelector('.header-menu').addEventListener('click', event => {
    if (!mobile.classList.contains('block')) {
        mobile.classList.add('block');
        mobile.classList.remove('none');
    }
});

document.querySelector('.mobile-image').addEventListener('click', event => {
    if (!mobile.classList.contains('none')) {
        mobile.classList.add('none');
        mobile.classList.remove('block');
    }
});


