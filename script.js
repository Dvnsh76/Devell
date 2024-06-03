//Responsive Navbar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

//Email Authorization
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#newsletter .form');
    const emailInput = form.querySelector('input[type="text"]');
    const signUpButton = form.querySelector('button');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    signUpButton.addEventListener('click', function (e) {
        e.preventDefault();

        const email = emailInput.value;

        if (emailPattern.test(email)) {
            alert('Thank you for signing up, Devell will reach you soon!.');
        } else {
            alert('Invalid Email ID, Try again!');
            emailInput.style.borderColor = 'red';
        }
    });
    emailInput.addEventListener('input', function () {
        emailInput.style.borderColor = '';
    });
});
