const scene = document.getElementById("scene");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const letter = document.getElementById("letter");
const instruction = document.getElementById("instruction");

openButton.addEventListener("click", function () {
    scene.classList.add("open");

    letter.setAttribute("aria-hidden", "false");

    instruction.textContent =
        "A message from my heart to yours ♥";
});

closeButton.addEventListener("click", function () {
    scene.classList.remove("open");

    letter.setAttribute("aria-hidden", "true");

    instruction.textContent =
        "A little surprise just for you";
});