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