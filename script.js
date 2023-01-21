let placeholderImage = document.getElementById("image-placeholder")
let form = document.querySelector(".right-column > form")
let currentImage = ""
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formValue = event.target.os
    if (formValue !== currentImage) {
        alert("poznal si")
    }else{
        alert("posral si to")
    }
})
let obrazky = {
    "linux": "linux.png",
    "macos": "macos.png",
    "windows": "win.png"
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let imageElement = document.createElement("img")
imageElement.classList.add("image-os")
let randomNumber = getRandomInt(1, 3)
switch (randomNumber) {
    case 1:
        imageElement.src = obrazky.linux
        currentImage = "linux"
        break;
    case 2:
        imageElement.src = obrazky.macos
        currentImage = "macos"
        break;
    case 3:
        imageElement.src = obrazky.windows
        currentImage = "windows"
        break;
}
placeholderImage.append(imageElement)