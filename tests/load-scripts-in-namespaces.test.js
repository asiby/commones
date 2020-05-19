'use strict';

const puppeteer = require('puppeteer')

describe("The commonES instance can load various script in their own namespaces ...", () => {
    let browser
    let page

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true
        })

        page = await browser.newPage()
        await page.goto(
            "http://localhost:3000/index.html",
            {
                timeout: 10000,
                waitUntil: ["load", "domcontentloaded", "networkidle0"]
            }
        )
    })

    afterAll(async () => {
        browser.close()
    })

    test("Loading the Bar class in the nightclub namespace", async () => {
        await page.evaluate(() => {
            return commonES.ns('nightclub').require("./classes/Bar.js", 'Blob')
        })

        await page.waitFor(3000)

        // Checking for the Bar class in the nightclub namespace.
        let barClassName = await page.evaluate(() => {
            return (new nightclub.Blob()).constructor.name
        })

        expect(barClassName).toBe('Bar')

        // Checking for the Foo class aliases as Banana in the _ namespace.
        let bananaClassName = await page.evaluate(() => {
            return (new _.Banana()).constructor.name
        })

        expect(bananaClassName).toBe('Foo')

        // Checking for the Foo class aliases as Orange in the com_abdoulaye_playground namespace.
        let orangeClassName = await page.evaluate(() => {
            return (new com_abdoulaye_playground.Orange()).constructor.name
        })

        expect(orangeClassName).toBe('Foo')
    })
})
