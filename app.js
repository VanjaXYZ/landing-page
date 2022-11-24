// ********MENU & ORDER FUNCTIONALITY*********
const toggleMenu = document.getElementById("toggleMenu");
const openMenu = document.querySelector(".menu");
const toggleOrder = document.getElementById("toggleOrder");
const openOrder = document.querySelector(".order");
const closeMenuOrderOnSection = document.querySelector("section");

toggleMenu.addEventListener("click", togglerMenuFunc);
closeMenuOrderOnSection.addEventListener("click", closeMenu);
toggleOrder.addEventListener("click", togglerOrderFunc);

function closeMenu() {
  openMenu.classList.remove("show");
}
function togglerOrderFunc() {
  openOrder.classList.toggle("show");
  openMenu.classList.remove("show");
}
function togglerMenuFunc() {
  openMenu.classList.toggle("show");
  openOrder.classList.remove("show");
}

const orderButton = document.querySelector(".checkoutBtn");
let mainOrder = document.querySelectorAll("#select");
let checkoutTotal = document.querySelector(".checkout");
let checkoutName = document.querySelector(".checkout__name");
let checkoutNumber = document.querySelector(".checkout__number");
let totalSumArray = [];

orderButton.addEventListener("click", () => {
  mainOrder.forEach((order) => {
    for (let item of order) {
      if (item.selected) {
        let itemValue = Number(item.value);
        totalSumArray.push(itemValue);
      }
    }
  });
  let totalSum = totalSumArray.reduce((acc, curr) => {
    return acc + curr;
  });

  console.log(totalSum);
  checkoutTotal.value = `${totalSum.toFixed(2)}$`;
  if (
    checkoutTotal.value === "0.00$" ||
    checkoutName.value === "" ||
    checkoutNumber.value === ""
  ) {
    alert("Please, enter correct data!");
    checkoutTotal.value = "0.00$";
  } else {
    alert(
      `🚚 ${
        checkoutName.value
      }, order received! Total value: ${totalSum.toFixed(2)}$`
    );
  }
});

const clearButton = document.querySelector(".clearBtn");

clearButton.addEventListener("click", () => {
  checkoutTotal.value = "0.00$";
  checkoutName.value = "";
  checkoutNumber.value = "";
  totalSumArray = [];
  mainOrder.forEach((order) => {
    order[0].selected = true;
  });
});

// ********HAMBURGER MENU***************
const hamburgerMenu = document.querySelector(".hamburger");
const toggleMenu2 = document.getElementById("toggleMenu2");
const openMenu2 = document.querySelector(".menu");
const openOrder2 = document.querySelector(".order");
const toggleOrder2 = document.getElementById("toggleOrder2");

hamburgerMenu.addEventListener("click", openHamburger);
function openHamburger() {
  document.querySelector(".ham__1").classList.toggle("ham__1__clicked");
  document.querySelector(".ham__2").classList.toggle("ham__2__clicked");
  document.querySelector(".ham__3").classList.toggle("ham__3__clicked");
  document
    .querySelector(".nav__links__clicked")
    .classList.toggle("hidden__clicked");
}

toggleMenu2.addEventListener("click", () => {
  openMenu2.classList.toggle("show");
  openOrder2.classList.remove("show");
});

toggleOrder2.addEventListener("click", () => {
  openOrder.classList.toggle("show");
  openMenu.classList.remove("show");
});

// ******FORM SUBMIT*******

const form = document.querySelector(".section__form");
let fName = document.querySelector(".fName");
let lName = document.querySelector(".lName");
let email = document.querySelector(".eMail");
let query = document.querySelector(".query");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    fName.value === "" ||
    lName.value === "" ||
    email.value === "" ||
    query.value === ""
  ) {
    alert("Please, enter correct data!");
  } else {
    alert("✉ Query sent! Thank you for your time!");
  }
});
