//fonction apparition Présentation
let togg1 = document.getElementById("togg1");
let d1 = document.getElementById("d1");
togg1.addEventListener("click", () => {
    if (getComputedStyle(d1).visibility === "hidden") {
        d1.style.visibility = "visible";
    } else {
        d1.style.visibility = "hidden";
    }
})

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




