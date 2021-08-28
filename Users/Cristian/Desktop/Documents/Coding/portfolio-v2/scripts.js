const vh = window.innerHeight;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if(window.scrollY >= vh){
        navbar.classList.add('solid-bg');
    }
    else{
        navbar.classList.remove('solid-bg');
    }
})

const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar')

burger.addEventListener('click', () => {
    navbar.classList.toggle('solid-bg');
    sidebar.classList.toggle('translated');
})

const sidebarLinks = document.querySelectorAll('.sidebar ul li');

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.toggle('translated');
    })
});

const logo = document.querySelector('nav h1');

logo.addEventListener('click', () => {
    sidebar.classList.remove('translated');
})