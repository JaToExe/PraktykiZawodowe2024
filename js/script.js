'use strict';

const hamburger = document.querySelector('.material-icons');
const menu = document.querySelector('.navigation');
const open = document.querySelector('nav .material-icons');
const close = document.querySelector('.navigation .material-icons');


hamburger.addEventListener('click', () => {
    menu.classList.add('showMenu')
    open.classList.add('material-icons-open')
})

close.addEventListener('click', () => {
    menu.classList.remove('showMenu')
    open.classList.remove('material-icons-open')
})