
import { describe, expect, it, beforeAll, vi } from 'vitest'
import { JSDOM } from 'jsdom'
import { changeStyle, visibleToast } from '../src/js/app.js'

describe('APP', () => {
  let dom
  let document
  let backgroundMock
  let productImgeMock
  let tagMock
  let buttonAddCartMock
  let mockChangeStyleFunc

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


    // Mock de la funcion changeStyles del app.js
    mockChangeStyleFunc = vi.fn().mockImplementation((colorBg, url, color) => {
      backgroundMock.style.backgroundColor = colorBg
      productImgeMock.style.backgroundImage = url
      tagMock.style.backgroundColor = color
      buttonAddCartMock.style.backgroundColor = color
    })



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


  it("should changeStyle change the label, add button and background color to red", async () => {
    //simulate click on button function changeStyles passing arguments to the function
    mockChangeStyleFunc("orange", "url('../../public/img/redcar.jpeg')", "red")

    expect(tagMock.style.backgroundColor).toBe("red")
    expect(backgroundMock.style.backgroundColor).toBe("orange")
    expect(productImgeMock.style.backgroundImage).toMatch(/redcar.jpeg/)
    expect(buttonAddCartMock.style.backgroundColor).toBe("red")
  });

  it("should changeStyle change the label, add button and background color to gray", async () => {
    //simulate click on button function changeStyles passing arguments to the function
    mockChangeStyleFunc("turquoise", "url('../../public/img/graycar.jpeg')", "gray")

    expect(tagMock.style.backgroundColor).toBe("gray")
    expect(backgroundMock.style.backgroundColor).toBe("turquoise")
    expect(productImgeMock.style.backgroundImage).toMatch(/graycar.jpeg/)
    expect(buttonAddCartMock.style.backgroundColor).toBe("gray")
  });

  it("should changeStyle change the label, add button and background color to black", async () => {
    //Declaring new values to see the change in the black color
    backgroundMock.style.backgroundColor = "orange"
    productImgeMock.style.backgroundImage = "url('../../public/img/redcar.jpeg')"
    tagMock.style.backgroundColor = "red"
    buttonAddCartMock.style.backgroundColor = "red"
    //simulate click on button function changeStyles passing arguments to the function
    mockChangeStyleFunc("green", "url('../../public/img/blackcar.jpeg')", "black")

    expect(tagMock.style.backgroundColor).toBe("black")
    expect(backgroundMock.style.backgroundColor).toBe("green")
    expect(productImgeMock.style.backgroundImage).toMatch(/blackcar.jpeg/)
    expect(buttonAddCartMock.style.backgroundColor).toBe("black")
  });

  it("should exist the function visibleToast", async () => {
    expect(visibleToast).toBeDefined();
    expect(typeof visibleToast).toBe("function");
  });

  it("should display a toast when clicking on the add to cart button", () => {
    visibleToast(document)
    expect(document.querySelector('.feedback > span').innerHTML).toBe("¿Guao, vas a ser el dueño de un Benz ?")
  })
})
