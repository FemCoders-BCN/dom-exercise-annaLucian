
const colorRed = document.querySelector(".red")
const colorBlack = document.getElementsByClassName("black")
const colorGray =  document.getElementsByClassName("gray")

const imgCard = document.querySelector(".product-image")

const itemTag = document.getElementsByTagName("h3")

const cartButton = document.getElementById("button")

colorRed.addEventListener("click", () =>{
  imgCard.style.backgroungImage = "url('../public/img/redcar.jpg')";
  cartButton.style.backgroundColor = "red";
  itemTag.style.backgroundColor = "red";
});