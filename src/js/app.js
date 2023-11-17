//constantes colores
const root = document.documentElement;
const colorVariableRed = getComputedStyle(root).getPropertyValue("--color-red")
const colorVariableBlack = getComputedStyle(root).getPropertyValue("--color-black")
const colorVariableGray = getComputedStyle(root).getPropertyValue("--color-gray")

//constantes botones 
const colorRed = document.querySelector(".red")
const colorBlack = document.querySelector(".black")
const colorGray = document.querySelector(".gray")
//selector de imagen
const container = document.querySelector(".product-description")
const imgCard = document.querySelector(".product-image")
//selector tag
const tagSelector = document.querySelector(".tag")
//selector de boton
const btnAdd = document.querySelector(".button-add-cart")

const changeColorRed = () => {
  tagSelector.style.backgroundColor = colorVariableRed
  btnAdd.style.backgroundColor = colorVariableRed
  imgCard.style.backgroundImage = 'url("../../public/img/redcar.jpg")'
  container.style.backgroundColor = "rgb(223 142 0)"
}

const changeColorGray = () => {
  tagSelector.style.backgroundColor = colorVariableGray
  btnAdd.style.backgroundColor = colorVariableGray
  imgCard.style.backgroundImage = 'url("../../public/img/graycar.jpg")'
}

colorRed.addEventListener('click', changeColorRed)
colorGray.addEventListener('click', changeColorGray)