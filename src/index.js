function displayPoem(response) {
  console.log("Poem generated!");

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
    "You are a romantic expert and love to write short poems. Your mission is to write a 4 line poem in basic HTML format. Please make sure to follow the user instructions. Sign the poem with `SheCodes AI` inside an <em> element";
  let apiKey = "a25680cd3bfede3ffb2o46193b1cd5tb";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generatePoem);
