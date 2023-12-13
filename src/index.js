function displayStory(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateStory(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "dt38edb4400a7f2a527f57bfe46o7a34";
  let prompt = `User instructions: Generate a story about ${instructionsInput.value}`;
  let context =
    "You are an expert at writing short cute silly stories for children. Your mission to generate an 8 line story in basic HTML. Make sure to follow the user instructions. Sign the story 'SheCodes AI' inside a <strong> element at the end of the story";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let storyElement = document.querySelector("#story");
  storyElement.classList.remove("hidden");
  storyElement.innerHTML = `<div class="⌛ generating">Generating a story about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayStory);
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
