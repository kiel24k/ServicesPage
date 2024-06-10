const burger = () => {
    let burgerBtn = document.querySelector(".burger");
    let nav = document.querySelector("nav");
    let exit = document.querySelector(".exit");
burgerBtn.addEventListener("click", () => {
   nav.classList.add('nav-show')
   burgerBtn.style.display = 'none';
})

exit.addEventListener("click", () => {
    nav.classList.remove('nav-show')
    burgerBtn.style.display = 'block';
})
}
burger()