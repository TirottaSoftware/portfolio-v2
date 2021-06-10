var burger = document.querySelector(".burger");
var sidebar = document.querySelector(".sidebar");

burger.addEventListener("click", () =>{
    sidebar.classList.toggle("hidden");
})
window.addEventListener("resize", () =>{
    if(window.innerWidth >= 1250){
        sidebar.classList.add("hidden");
    }
})

// NAVBAR SCROLL ANIMATION

var navbar = document.querySelector("nav");
var heroHeight = document.querySelector(".hero").clientHeight;

window.addEventListener("scroll", () =>{
    if(window.scrollY > heroHeight/2){
        navbar.classList.add("solid");
        sidebar.classList.add("text-black");
    }
    else{
        navbar.classList.remove("solid");
        sidebar.classList.remove("text-black");
    }
})

//PROJECTS-MODAL CLICK EVENT HANDLER

var modalButton = document.querySelector("#link-more-btn");
var modal = document.querySelector(".projects-modal");


modalButton.addEventListener("click", () => {
    modal.classList.toggle("modal-hidden");
})
