let toggle = document.getElementById('toggle');
let untoggle = document.getElementById('untoggle');
let close = document.getElementById('close');
let menuIc = document.getElementById('menuIc');
let menuchartIc = document.getElementById('menuchartIc');
let notifyIc = document.getElementById('notifyIc');
let analyIc = document.getElementById('analyIc');
let likeIc = document.getElementById('likeIc');



let dashboard = document.querySelector(".dashboard")
let pagetwo = document.querySelector(".pagetwo")
let pagethree = document.querySelector(".pagethree")
let pagefour = document.querySelector(".pagefour")
let pagefive = document.querySelector(".pagefive")

toggle.addEventListener("click", () => {
close.style.width = "15%"
toggle.style.display= "none"
untoggle.style.display= "block"

    });
untoggle.addEventListener("click", () => {
close.style.width = "3%"
untoggle.style.display= "none"
toggle.style.display= "block"

    });
menuIc.addEventListener("click", () => {
pagetwo.style.display = "block"
dashboard.style.display = "none"
pagethree.style.display = "none"
pagefour.style.display = "none"
pagefive.style.display = "none"
    });
menuchartIc.addEventListener("click", () => {
pagethree.style.display = "block"
dashboard.style.display = "none"
pagetwo.style.display = "none"
pagefour.style.display = "none"
pagefive.style.display = "none"
    });
notifyIc.addEventListener("click", () => {
        pagefour.style.display = "block"
        dashboard.style.display = "none"
        pagetwo.style.display = "none"
        pagethree.style.display = "none"
        pagefive.style.display = "none"
});

analyIc.addEventListener("click", () => {
    pagefive.style.display = "block"
    dashboard.style.display = "none"
    pagethree.style.display = "none"
    pagefour.style.display = "none"
    pagetwo.style.display = "none"
        });