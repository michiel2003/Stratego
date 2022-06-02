function createBomb(square, color){
    var newBomb = document.createElement("img")
    newBomb.src = "base_images/bomb.png"
    newBomb.style.height = "95px"
    var boardBox = document.getElementById("boardBox" + square)
    newBomb.style.backgroundColor = color
    boardBox.appendChild(newBomb)
}