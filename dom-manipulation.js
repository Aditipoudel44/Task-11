document.addEventListener("DOMContentLoaded", () => {
    const styleDiv = document.getElementById("style-div");
    const dynamicList = document.getElementById("dynamic-list");
    const inputField = document.getElementById("dom-input");
    const inputDisplay = document.getElementById("input-display");
    const image = document.getElementById("dom-image");
    styleDiv.style.color = "white";
    styleDiv.style.backgroundColor = "lightpink";
    styleDiv.style.fontSize = "20px";
    styleDiv.style.padding = "10px";
    const newItem = document.createElement("li");
    newItem.textContent = "This list item is added using JavaScript!";
    dynamicList.appendChild(newItem);


    styleDiv.classList.add("highlight");
    setTimeout(() => styleDiv.classList.remove("highlight"), 2000);
    image.src = "dom-image.png";
    inputField.addEventListener("input", () => {
        inputDisplay.textContent = inputField.value;
    });
    const fruits = ["Kiwi", "Blueberry", "Pineapple", "Dragonfruit"];
    fruits.forEach(fruit => {
        const li = document.createElement("li");
        li.textContent = fruit;
        dynamicList.appendChild(li);
    });
});