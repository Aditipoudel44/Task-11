document.addEventListener("DOMContentLoaded", () => {
    const clickBtn = document.getElementById("click-btn");
    clickBtn.addEventListener("click", () => {
        alert("Button clicked!");
    });
    const hoverDiv = document.getElementById("hover-div");
    hoverDiv.addEventListener("mouseenter", () => {
        hoverDiv.style.backgroundColor = "orange";
    });
    hoverDiv.addEventListener("mouseleave", () => {
        hoverDiv.style.backgroundColor = "lightpink";
    });
    const keyInput = document.getElementById("key-input");
    const typedValue = document.getElementById("typed-value");
    keyInput.addEventListener("keyup", () => {
        typedValue.textContent = keyInput.value;
    });
    let count = 0;
    const counterDisplay = document.getElementById("counter");
    document.getElementById("increment").addEventListener("click", () => {
        count++;
        counterDisplay.textContent = count;
    });
    document.getElementById("decrement").addEventListener("click", () => {
        count--;
        counterDisplay.textContent = count;
    });
    const form = document.getElementById("sample-form");
    const formError = document.getElementById("form-error");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const password = document.getElementById("password").value;

        if (name.length < 3 || password.length < 6) {
            formError.textContent = "Name must be at least 3 chars and password 6 chars.";
        } else {
            formError.textContent = "";
            console.log({ name, password });
        }
    });
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log(`Button ${btn.textContent} clicked`);
        });
    });
    const parentDiv = document.createElement("div");
    parentDiv.style.border = "2px solid black";
    parentDiv.style.padding = "10px";
    parentDiv.textContent = "Parent Div";
    const childDiv = document.createElement("div");
    childDiv.style.border = "2px dashed red";
    childDiv.style.margin = "5px";
    childDiv.textContent = "Child Div";
    parentDiv.appendChild(childDiv);
    document.body.appendChild(parentDiv);
    parentDiv.addEventListener("click", () => alert("Parent Clicked"));
    childDiv.addEventListener("click", (e) => {
        alert("Child Clicked");
        e.stopPropagation();
    });
});