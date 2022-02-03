const questionbtns = document.querySelectorAll(".question-btn");
questionbtns.forEach(function(btn){
    btn.addEventListener("click",function(){
        this.classList.toggle("active");
        let answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    })
})