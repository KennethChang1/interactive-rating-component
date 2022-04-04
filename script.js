const container = document.querySelector("#container");
const containers = document.querySelector("#containers");
const buttons = document.querySelector("#button");
const ratings = document.querySelectorAll(".ratings__button");
const rating = document.querySelector(".ratings__button");
const score = document.querySelector(".score");
const content = document.createElement("p");

buttons.disabled = true;

function changeClass() {
    container.classList.add('hidden');
    containers.classList.remove('hidden');
}

function enableButton(){
    buttons.disabled = false;
    content.textContent = "You selected " + this.id + " out of 5";
    score.appendChild(content);
}

ratings.forEach((button) => {
    button.addEventListener('click', enableButton);
});

buttons.addEventListener("click", changeClass);
