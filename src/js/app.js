
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
    CONTAINER_BACKGROUND: "rgb(38 191 168)"
  },
  VARIANT_BLACK: {
    TAG_BACKGROUND_COLOR: colorVariableBlack,
    BUTTON_BACKGROUND_COLOR: colorVariableBlack,
    IMAGE_BACKGROUND_URL: 'url("../../public/img/blackcar.jpg")',
    CONTAINER_BACKGROUND: "rgb(96 193 84)"
  }

}

function changeStyle(style) {
  tagSelector.style.backgroundColor = style.TAG_BACKGROUND_COLOR
  btnAdd.style.backgroundColor = style.BUTTON_BACKGROUND_COLOR
  imgCard.style.backgroundImage = style.IMAGE_BACKGROUND_URL
  container.style.backgroundColor = style.CONTAINER_BACKGROUND
}


document.addEventListener('DOMContentLoaded', function () {
  colorRed.addEventListener('click', () => changeStyle(STYLE_PROPERTIES.VARIANT_RED))
  colorGray.addEventListener('click', () => changeStyle(STYLE_PROPERTIES.VARIANT_GRAY))
  colorBlack.addEventListener('click', () => changeStyle(STYLE_PROPERTIES.VARIANT_BLACK))
});

export { changeStyle }

