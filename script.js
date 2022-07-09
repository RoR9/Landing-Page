const menuBurger=document.querySelector(".header_burger")
const navMenu=document.querySelector(".nav_menu")
const body=document.querySelector("body")

menuBurger.addEventListener("click",function(){
    menuBurger.classList.toggle("active")
    navMenu.classList.toggle("active")
    body.classList.toggle("lock")
})