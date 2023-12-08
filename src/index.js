function generateStory(event) {
  event.preventDefault();

  new Typewriter("#story", {
    strings: ["story story story"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
