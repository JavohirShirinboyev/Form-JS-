// Selectors
const fName = document.querySelector("form #fName");
const age = document.querySelector("form #age");
const isMarried = document.querySelector("form #isMarried");

const btnSubmit = document.querySelector(".btnSubmit");
const btnCancel = document.querySelector(".btnCancel");

const fNameText = document.querySelector(".fName");
const ageText = document.querySelector(".age");
const isMarriedText = document.querySelector(".isMarried");

const message = document.querySelector(".message");

// Event Listeners
fName.addEventListener("input", function (e) {
    fNameText.innerHTML = `🐱‍💻Name: ${e.target.value}`;
});

age.addEventListener("input", function (e) {
    ageText.innerHTML = `🧐Age: ${e.target.value}`;
});

isMarried.addEventListener("input", function (e){
  isMarriedText.innerHTML = `💕Is Married: ${e.target.value}`;
  console.log(e.target.value);
});

btnSubmit.addEventListener("click", function () {
    message.innerHTML = "Successful send! ✌";
})

btnCancel.addEventListener("click", function () {
    message.innerHTML = "Unsuccessful send! Try again 😥";
})


