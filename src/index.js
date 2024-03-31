function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "A lovely poem",
    autoStart: true,
    delay: 65,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generatePoem);
