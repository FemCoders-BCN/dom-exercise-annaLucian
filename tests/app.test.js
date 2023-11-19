
import { describe, expect, it, beforeAll, vi } from 'vitest'
import { JSDOM } from 'jsdom'
import { STYLE_PROPERTIES, changeStyle, visibleToast } from '../src/js/app.js'

describe('APP', () => {
  let dom
  let document
  let backgroundMock
  let productImgeMock
  let tagMock
  let buttonAddCartMock

  beforeAll(async () => {
    dom = await JSDOM.fromFile("index.html", {
      resources: "usable",
      runScripts: "dangerously",
    })

    document = dom.window.document
    backgroundMock = document.querySelector('.product-description')
    productImgeMock = document.querySelector('.product-image')
    tagMock = document.querySelector('.tag')
    buttonAddCartMock = document.querySelector('#button')

    backgroundMock.style.backgroundColor = "green"
    productImgeMock.style.backgroundImage = "url('../../public/img/blackcar.jpeg')"
    tagMock.style.backgroundColor = "black"
    buttonAddCartMock.style.backgroundColor = "black"
  });

  it("should render css", async () => {

    let link = document.querySelector("link");
    expect(link.href).toMatch(/\/src\/css\/style.css$/);
  });

  it("should render js file", async () => {

    let script = document.querySelector("script");
    expect(script.src).toMatch(/\/src\/js\/app.js$/);
  });


  it("should exist the function changeStyle", async () => {
    expect(changeStyle).toBeDefined();
    expect(typeof changeStyle).toBe("function");
  });


  it("should changeStyle change the label, add button and background color to red", () => {
    //init the values of variant red
    STYLE_PROPERTIES.VARIANT_RED.CONTAINER_BACKGROUND = "orange"
    STYLE_PROPERTIES.VARIANT_RED.TAG_BACKGROUND_COLOR = "red"
    STYLE_PROPERTIES.VARIANT_RED.BUTTON_BACKGROUND_COLOR = "red"

    //simulate click on button function changeStyles passing arguments to the function

    changeStyle(STYLE_PROPERTIES.VARIANT_RED, document)
    expect(backgroundMock.style.backgroundColor).toBe("orange")
    expect(productImgeMock.style.backgroundImage).toMatch(/redcar.jpeg/)
    expect(buttonAddCartMock.style.backgroundColor).toBe("red")
    expect(tagMock.style.backgroundColor).toBe("red")
  })

  it("should changeStyle change the label, add button and background color to gray", () => {
    //init the values of variant gray
    STYLE_PROPERTIES.VARIANT_GRAY.CONTAINER_BACKGROUND = "turquoise"
    STYLE_PROPERTIES.VARIANT_GRAY.TAG_BACKGROUND_COLOR = "gray"
    STYLE_PROPERTIES.VARIANT_GRAY.BUTTON_BACKGROUND_COLOR = "gray"

    //simulate click on button function changeStyles passing arguments to the function

    changeStyle(STYLE_PROPERTIES.VARIANT_GRAY, document)
    expect(backgroundMock.style.backgroundColor).toBe("turquoise")
    expect(productImgeMock.style.backgroundImage).toMatch(/graycar.jpg/)
    expect(buttonAddCartMock.style.backgroundColor).toBe("gray")
    expect(tagMock.style.backgroundColor).toBe("gray")
  })

  it("should changeStyle change the label, add button and background color to black", () => {
    //Declaring new values to see the change in the black color
    backgroundMock.style.backgroundColor = "orange"
    productImgeMock.style.backgroundImage = "url('../../public/img/redcar.jpeg')"
    tagMock.style.backgroundColor = "red"
    buttonAddCartMock.style.backgroundColor = "red"

    //init the values of variant gray
    STYLE_PROPERTIES.VARIANT_BLACK.CONTAINER_BACKGROUND = "green"
    STYLE_PROPERTIES.VARIANT_BLACK.TAG_BACKGROUND_COLOR = "black"
    STYLE_PROPERTIES.VARIANT_BLACK.BUTTON_BACKGROUND_COLOR = "black"

    //simulate click on button function changeStyles passing arguments to the function

    changeStyle(STYLE_PROPERTIES.VARIANT_BLACK, document)
    expect(backgroundMock.style.backgroundColor).toBe("green")
    expect(productImgeMock.style.backgroundImage).toMatch(/blackcar.jpg/)
    expect(buttonAddCartMock.style.backgroundColor).toBe("black")
    expect(tagMock.style.backgroundColor).toBe("black")
  })

  it("should exist the function visibleToast", async () => {
    expect(visibleToast).toBeDefined();
    expect(typeof visibleToast).toBe("function");
  });

  it("should display a toast when clicking on the add to cart button", () => {
    visibleToast(document)
    expect(document.querySelector('.feedback > span').innerHTML).toBe("¿Guao, vas a ser el dueño de un Benz ?")
  })
})
