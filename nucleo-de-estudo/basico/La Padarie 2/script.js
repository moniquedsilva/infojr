var queue = [
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

// let btn = document.getElementById("btn");
// btn.addEventListener("click", handleClick);

// function handleClick() {}

function submitForm(event) {
  event.preventDefault();

  console.log(event.target["name"].value);
  console.log(event.target["amount"].value);
}
