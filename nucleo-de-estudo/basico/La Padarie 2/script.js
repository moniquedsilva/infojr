let queue = [
  {
    name: "Antonio figueiredo",
    amount: 3,
  },
  {
    name: "Maria Carolina",
    amount: 1,
  },
  {
    name: "Jão Vitor",
    amount: 2,
  },
  {
    name: "Andressa Silva",
    amount: 27,
  },
];

let setClient = document.querySelector(".client-area");

function people(name, amount) {
  let newClient = document.createElement("div");
  let personName = document.createElement("p");
  let personAmount = document.createElement("span");

  personName.innerHTML = name;
  personAmount.innerHTML = "Quantidade: " + amount;

  personName.setAttribute("class", "name");
  personAmount.setAttribute("class", "amount");
  newClient.setAttribute("class", "client-area");

  newClient.appendChild(personName);
  newClient.appendChild(personAmount);
  setClient.appendChild(newClient);
}

function load() {
  for (let index = 0; index < queue.length; index++) {
    people(queue[index].name, queue[index].amount);
  }
}

onload = load();

document.addEventListener("submit", function (e) {
  e.preventDefault();
  let getName = document.getElementById("name").value;
  let getAmount = document.getElementById("paes-amount").value;
  queue.push({ name: getName, amount: getAmount });
  people(getName, getAmount);
});

function timer() {
  queue.shift();
  while (setClient.hasChildNodes()) {
    setClient.removeChild(setClient.firstChild);
  }
  load();
}

setInterval(timer, 10000);
