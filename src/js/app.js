
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
// const container = document.querySelector(".product-description")
// const imgCard = document.querySelector(".product-image")
// //selector tag
// const tagSelector = document.querySelector(".tag")
// //selector de boton
// const btnAdd = document.querySelector(".button-add-cart")
// const toast
const toastContainer = document.querySelector("#toast-container")

const btnAddToCart = document.querySelector("#button")
// const containToast = document.querySelector(".feedback")

const STYLE_PROPERTIES = {
  VARIANT_RED: {
    TAG_BACKGROUND_COLOR: colorVariableRed,
    BUTTON_BACKGROUND_COLOR: colorVariableRed,
    IMAGE_BACKGROUND_URL: 'url("../../public/img/redcar.jpeg")',
    CONTAINER_BACKGROUND: "rgb(223 142 0)"
  },
  VARIANT_GRAY: {
    TAG_BACKGROUND_COLOR: colorVariableGray,
    BUTTON_BACKGROUND_COLOR: colorVariableGray,
    IMAGE_BACKGROUND_URL: 'url("../../public/img/graycar.jpg")',
    CONTAINER_BACKGROUND: "rgb(67 227 203)"
  },
  VARIANT_BLACK: {
    TAG_BACKGROUND_COLOR: colorVariableBlack,
    BUTTON_BACKGROUND_COLOR: colorVariableBlack,
    IMAGE_BACKGROUND_URL: 'url("../../public/img/blackcar.jpg")',
    CONTAINER_BACKGROUND: "rgb(96 193 84)"
  }

}


function changeStyle(style, document) {
  document.querySelector(".product-description").style.backgroundColor = style.CONTAINER_BACKGROUND
  document.querySelector(".tag").style.backgroundColor = style.TAG_BACKGROUND_COLOR
  document.querySelector(".button-add-cart").style.backgroundColor = style.BUTTON_BACKGROUND_COLOR
  document.querySelector(".product-image").style.backgroundImage = style.IMAGE_BACKGROUND_URL


}

const visibleToast = (document) => {

  const feedback = document.createElement("div")
  feedback.classList.add("feedback")
  const spanToast = document.createElement("span")
  spanToast.textContent = "¿Guao, vas a ser el dueño de un Benz ?"
  feedback.appendChild(spanToast)
  document.querySelector("#toast-container").appendChild(feedback)

  feedback.classList.add("show")
  setTimeout(() => {
    feedback.classList.remove("show")
    setTimeout(() => {
      toastContainer.removeChild(feedback)
    }, 500)
  }, 3000)

}


document.addEventListener('DOMContentLoaded', function () {
  colorRed.addEventListener('click', () => changeStyle(STYLE_PROPERTIES.VARIANT_RED, document))
  colorGray.addEventListener('click', () => changeStyle(STYLE_PROPERTIES.VARIANT_GRAY, document))
  colorBlack.addEventListener('click', () => changeStyle(STYLE_PROPERTIES.VARIANT_BLACK, document))
  btnAddToCart.addEventListener('click', () => visibleToast(document))
});

export { changeStyle, visibleToast, STYLE_PROPERTIES }

