const element = document.querySelector("h1");

function turnRed() {
    element.style.color = "red";
}

element.onclick = "turnRed";