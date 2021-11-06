//fonction apparition Présentation
let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
togg1.addEventListener("click", () => {
    if (getComputedStyle(d1).display != "none") {
        d1.style.display = "none";
    } else {
        d1.style.display = "block";
    }
})

function togg() {
    if (getComputedStyle(d2).display != "none") {
        d2.style.display = "none";
    } else {
        d2.style.display = "block";
    }
};
togg2.onclick = togg;

//fonction apparition lettres par lettres de "je suis un développeur..."
const htmlP = document.getElementById("hello");
const txt = htmlP.dataset.label;
let i = 0;
function showLetters() {
    let timeOut;
    if (i < txt.length) {
        htmlP.innerHTML += `<span>${txt[i]}</span>`;
        timeOut = setTimeout(showLetters, 200)
        i++
    }
    else {
        clearTimeout(timeOut);
        console.log("end")
    }
}
showLetters();

//navbar


