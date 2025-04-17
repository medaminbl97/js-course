const all_buttons = document.getElementsByClassName("button");
const add_button_button = all_buttons[0];
add_button_button.addEventListener("click", function () {
  const new_div = document.createElement("div");
  new_div.textContent = "I'm a new div!";
  new_div.setAttribute("class", "button");
  document.body.appendChild(new_div);
});
