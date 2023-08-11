const togglebtn = document.getElementById("toggle-btn");
const sidebar = document.querySelector(".sidebar");
const inputbox = document.querySelector("input");
const details = document.querySelector(".details");
const searchIcon = document.querySelector(".uil-search");
const pTags = document.getElementsByTagName("p");
let i = 0;
const body = document.querySelector("body");
const slidebtn = body.querySelector(".slide-btn");
slidebtn.addEventListener("click",function (){
    body.classList.toggle("dark");
})
togglebtn.classList.add("uil-angle-right")
togglebtn.classList.remove("uil-angle-left")
sidebar.style.width = 65 + "px";
details.style.opacity = "0";
inputbox.style.opacity = "0";
for (let j = 2; j < pTags.length; j++) {
    pTags[j].style.opacity = "0";
}
togglebtn.addEventListener("click", function () {
    if (i % 2 == 0) {
        togglebtn.classList.remove("uil-angle-right")
        togglebtn.classList.add("uil-angle-left")
        sidebar.style.width = 250 + "px";
        setTimeout(function () {
            details.style.opacity = "1";
            inputbox.style.opacity = "1";
            for (let j = 2; j < pTags.length; j++) {
                pTags[j].style.opacity = "1";
            }
        }, 1000)
    } else {
        togglebtn.classList.add("uil-angle-right")
        togglebtn.classList.remove("uil-angle-left")
        sidebar.style.width = 65 + "px";
        details.style.opacity = "0";
        inputbox.style.opacity = "0";
        for (let j = 2; j < pTags.length; j++) {
            pTags[j].style.opacity = "0";
        }
        // setTimeout(function () {
        //     inputbox.style.opacity = "1";
        //     searchIcon.style.left = "0px";
        //     for (let j = 2; j < pTags.length; j++) {
        //         pTags[j].style.opacity = "1";
        //     }
        // }, 1000)
    }
    i++;
});