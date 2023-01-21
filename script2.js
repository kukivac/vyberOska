let placeholderImage = document.getElementById("image-placeholder")
let form = document.querySelector(".right-column > form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    let formValue = event.target.os.value
    let imageElement = document.createElement("img")
    placeholderImage.innerHTML = "";
    imageElement.classList.add("image-os")
    switch (formValue) {
        case "linux":
            imageElement.src = obrazky.linux
            break;
        case "macos":
            imageElement.src = obrazky.macos
            break;
        case "windows":
            imageElement.src = obrazky.windows
            break;
    }
    placeholderImage.append(imageElement)
})
let obrazky = {
    "linux": "linux.png",
    "macos": "macos.png",
    "windows": "win.png"
} 