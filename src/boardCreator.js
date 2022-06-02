const boardContainer = document.getElementById("boardContainer")
var fieldId = 0
function createBoard() {

    for (let index = 0; index < 10; index++) {
        var newElem = document.createElement("div");
        newElem.id = "boardRow" + index;
        newElem.classList.add("boardRow");
        boardContainer.appendChild(newElem);
        
    }

    for (let index = 0; index < 10; index++) {
        var selectedRow = document.getElementById("boardRow" + index);
        for (let i = 0; i < 10; i++) {    
            fieldId++;
            var newElem = document.createElement("div");
            newElem.innerText = fieldId;
            newElem.id = "boardBox" + fieldId;
            newElem.classList.add("boardField")
            selectedRow.appendChild(newElem)
        }
    }

    // water generation
    const waterField = [43, 44, 53, 54, 47, 48, 57, 58]
    waterField.forEach(element => {
        var idName = "boardBox" + element;
        document.getElementById(idName).classList.add("isWater")
    });

    
}


window.onload = function() {
    createBoard()
  };