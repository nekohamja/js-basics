const container = document.querySelector(".container");

const text1 = document.createElement("p");
text1.style.color = "red";
text1.textContent = "hey im red!";

const text2 = document.createElement("h1");
text2.style.color = "blue";
text2.textContent = "hey im blue!";

const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.background = "pink";

const divText1 = document.createElement("h1");
divText1.textContent = "im in a div";

const divText2 = document.createElement("p");
divText2.textContent = "me too!";

const divButton = document.createElement("button");
divButton.textContent = "Click me!";
// if creating single onclick property:
// divButton.onclick = () => alert("hey there!");
// if creating multiple properties:
divButton.addEventListener("click", () => {
  alert("hey there!");
  alert("i will change the background color!");
  div.style.background = "yellow";
});

div.appendChild(divText1);
div.appendChild(divText2);
div.appendChild(divButton);

container.appendChild(text1);
container.appendChild(text2);
container.appendChild(div);
