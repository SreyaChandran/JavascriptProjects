const body = document.body;
let lastscroll = 0;
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if(currentScroll <=0){
        body.classList.remove("scroll-up");
    }
    if(currentScroll > lastscroll && !body.classList.contains("scroll-down"))
    {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");   
    }
    if(currentScroll < lastscroll && body.classList.contains("scroll-down"))
    {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");   
    }

    lastscroll = currentScroll;
});
const navSlide = () => {
    const navIcon = document.querySelector(".nav-icon");
    const nav = document.querySelector(".nav-links");
    const navlinks = document.querySelectorAll(".nav-links li");
    navIcon.addEventListener("click", () => {
        nav.classList.toggle('nav-active');
        navlinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = "";
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 +0.3}s`;
            }
        });
        navIcon.classList.toggle('toggle');
    });
}
navSlide();

/*set date */
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.currentTarget.getAttribute("href"));
        const id = e.currentTarget.getAttribute("href").slice(1);
        document.getElementById(id).scrollIntoView(true);
    });
});