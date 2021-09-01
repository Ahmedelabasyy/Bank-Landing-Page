// Handling Burger Menu
let menuToggler = document.querySelector(".navbar-toggler");
let menuSpans = document.querySelectorAll(".menu");
menuToggler.onclick = () => {
    menuSpans.forEach(span => {
        if(!span.classList.contains("clicked")){
            span.classList.add("clicked");
        } else {
            span.classList.remove("clicked");
        }
        
    });
}

// Handling scroll to top button
let scrollBtn = document.querySelector(".scroll-top");

window.onscroll = () => {
    if(window.pageYOffset > 600) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
}

scrollBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}