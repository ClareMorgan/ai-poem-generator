function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 65,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let prompt = `The user instructions are: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic expert and love to write short poems. Your mission is to write a 4 line poem in basic HTML format. Please make sure to follow the user instructions. Sign the poem with `SheCodes AI` and have only the signature inside an <em> element";
  let apiKey = "a25680cd3bfede3ffb2o46193b1cd5tb";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generatePoem);
