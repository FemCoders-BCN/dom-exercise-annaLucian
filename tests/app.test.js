
import { describe, expect, it, beforeAll } from 'vitest'
import { JSDOM } from 'jsdom'
import { changeStyle } from '../src/js/app.js'
// const { changeStyle } = require('../src/js/app.js');
describe('APP', () => {
  let dom;
  beforeAll(async () => {
    dom = await JSDOM.fromFile("index.html", {
      resources: "usable",
      runScripts: "dangerously",
    });
  });

  it("should render css", async () => {
    let document = dom.window.document;

    let link = document.querySelector("link");
    expect(link.href).toMatch(/\/src\/css\/style.css$/);
  });

  it("should render js file", async () => {
    let document = dom.window.document;

    let script = document.querySelector("script");
    expect(script.src).toMatch(/\/src\/js\/app.js$/);
  });

  it("should exist the function changeStyle", async () => {
    expect(changeStyle).toBeDefined();
    expect(typeof changeStyle).toBe("function");
  });
})