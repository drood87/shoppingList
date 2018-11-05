var button = document.getElementById("enter");
var input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");
const deleteButton = document.getElementsByTagName("i");
var clearButton = document.getElementById("clear");

function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function createDeleteButtonIcon() {
    for (var ind = 0; ind < li.length; ind++) {
        var createDeleteButton = document.createElement("i");
        createDeleteButton.classList.add("fa", "fa-trash");
        li[ind].appendChild(createDeleteButton);
    }
}

function deleteNodeOnClick(e) {
    var trash = document.querySelectorAll("i");
    for (var ind = 0; ind < trash.length; ind++) {
        console.log(e);
        this.parentNode.remove();
    }
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    var createDeleteButton = document.createElement("i");
    createDeleteButton.classList.add("fa", "fa-trash");
    li.appendChild(createDeleteButton);
    deleteParentNodeOnClick();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function deleteParentNodeOnClick() {
    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", deleteNodeOnClick);
    }
}

function clearList() {
    ul.innerHTML = "";
}

clearButton.addEventListener("click", clearList);
ul.addEventListener("click", strikeThrough);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
createDeleteButtonIcon();
deleteParentNodeOnClick();
