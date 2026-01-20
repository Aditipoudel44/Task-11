document.addEventListener("DOMContentLoaded", () => {
    const dynamicList = document.getElementById("dynamic-list");
    const inputField = document.getElementById("dom-input");
    const inputDisplay = document.getElementById("input-display");
    const image = document.getElementById("dom-image");

    const newItem = document.createElement("li");
    newItem.textContent = "This list item is added using JavaScript!";
    dynamicList.appendChild(newItem);

    image.src="Document-object-model.png";

    inputField.addEventListener("input", () => {
        inputDisplay.textContent = inputField.value;
    });

    const fruits = ["Blueberry", "Kiwi", "Mango", "Dragonfruit"];
    fruits.forEach(fruit => {
        const li = document.createElement("li");
        li.textContent = fruit;
        dynamicList.appendChild(li);
    });
});
