const input = document.querySelector("#input");
const ul = document.querySelector("ul");

document.querySelector("#add").addEventListener("click", btnClick);
document.querySelector("#input").addEventListener("keyup", keyUp);
document.querySelector("#ul").addEventListener("click", ulClick);

function keyUp(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnClick();
    }
}

function btnClick(event) {
    event.preventDefault()
    if (input.value.length > 0) {
        var li = document.createElement("li");
        ul.appendChild(li);
        var label = document.createElement("label");
        var text = document.createTextNode(input.value);
        label.appendChild(text);
        li.appendChild(label);
        var radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.classList.add("radio-button");
        li.appendChild(radio);
        document.querySelector("#form").reset();
    }



}

function ulClick(e) {

    if (e.target && e.target.matches(".radio-button")) {
        const remove = e.target.parentNode;
        remove.style.opacity = "0";
        setTimeout(function () {
            remove.parentNode.removeChild(remove);
        }, 1100);
    }
}