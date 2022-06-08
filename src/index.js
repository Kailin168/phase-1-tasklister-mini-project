document.addEventListener("DOMContentLoaded", () => {
  const submitForm = document.querySelector("form")
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newText = document.querySelector("#new-task-description")
    const newList = document.createElement("li")
    if (newText.value === "") {
      return; //ends the function and not do anything after 
    }
    newList.textContent = newText.value;
    const newItem = document.querySelector("#tasks")
    newItem.appendChild(newList)
    newText.value = "" //set to empty string so that it clear the input box and show the placeholder again
  });
});
