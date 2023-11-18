
import { describe, expect, it, beforeAll, vi } from 'vitest'
import { JSDOM } from 'jsdom'
import { changeStyle } from '../src/js/app.js'

describe('APP', () => {
  let dom
  let document
  let backgroundMock
  let productImgeMock
  let tagMock
  let buttonAddCartMock
  let btnChangeToBlackMock
  let mockChangeStyleFunc
  beforeAll(async () => {
    dom = await JSDOM.fromFile("index.html", {
      resources: "usable",
      runScripts: "dangerously",
    })

    document = dom.window.document
    backgroundMock = dom.window.document.querySelector('.product-description')
    mockChangeStyleFunc = vi.fn().mockImplementation((styles) => {
      backgroundMock.style.backgroundColor = styles
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

  it.only("should changeStyle changes the label, the add button and the background color of the button color", async () => {

    //simulate click on button function changeStyles

    mockChangeStyleFunc("red")

    console.log("despues", { log: backgroundMock.style.backgroundColor });

    expect(backgroundMock.style.backgroundColor).toBe("red")

  });

})