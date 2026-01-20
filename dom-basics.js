document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("main-heading");
    const paragraphs = document.getElementsByClassName("para");
    const allParagraphs = document.getElementsByTagName("p");
    const queryHeading = document.querySelector("#main-heading");
    const queryAllParagraphs = document.querySelectorAll("p");

    console.log(heading);
    console.log(paragraphs);
    console.log(allParagraphs);
    console.log(queryHeading);
    console.log(queryAllParagraphs);
    heading.textContent = "DOM Basics!";
    paragraphs[0].innerHTML = "This paragraph demonstrates how JavaScript can update HTML content dynamically!";
});