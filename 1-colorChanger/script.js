function changeColor(color){
    console.log("Changing color to " + color);
    document.body.style.backgroundColor = color;
}

document.getElementById("grey").addEventListener("click", () => changeColor("grey"));
document.getElementById("blue").addEventListener("click", () => changeColor("blue"));
document.getElementById("white").addEventListener("click", () => changeColor("white"));
document.getElementById("yellow").addEventListener("click", () => changeColor("yellow"));