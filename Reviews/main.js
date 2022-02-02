const reviews =[
    {
        id : 1,
        name : "Sam",
        job : "Web Developer",
        img : "person.png",
        infomation : "Lorem ipsum dolor sit amet, consectetur adipisci elit"
    },
    {
        id : 2,
        name : "Susan",
        job : "UX Designer",
        img : "person2.png",
        infomation : " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
    },
    {
        id : 3,
        name : "john",
        job : "UI Designer",
        img : "person3.png",
        infomation : "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua",
    },
    {
        id : 4,
        name : "Alina",
        job : "Software Engineer",
        img : "person4.png",
        infomation : " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
    }
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job= document.getElementById("job");
const info= document.getElementById("info");
const prevbtn= document.getElementById("prev-btn");
const nextbtn= document.getElementById("next-btn");
const randombtn = document.getElementById("random-btn");

//starting array index
let currentItem = 0;

// function to show person based on currentItem
function showPerson()
{
    let item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.infomation;
}
 //DOMContent load
 window.addEventListener("DOMContentLoaded",function(){
     showPerson();
 });

 // Show next person
 nextbtn.addEventListener("click",function(){
     currentItem++;
     if(currentItem > reviews.length - 1)
     {
         currentItem = 0;
     }
     showPerson();
 });
//show previous person
prevbtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0)
    {
        currentItem = reviews.length-1;
    }
    showPerson();
});
//show random person
randombtn.addEventListener("click",function(){
    currentItem = Math.floor(Math.random()*reviews.length);
    showPerson();
})