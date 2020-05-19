/**
 * @jest-environment jsdom
 */
'use strict';

const jsdom = require('jsdom')

describe("The commonES instance can load various script in their own namespaces ...", () => {

    test("Loading the Bar class in the nightclub namespace", async () => {
        /*let x = document.body.evaluate((d) => {

            return d.innerHTML
        })*/
        const { window } = await jsdom.JSDOM.fromURL('http://localhost:3000/index.html', {
            runScripts: "dangerously"
        })

        //console.log(dom.window.document.head.innerHTML)
        //console.log(window.document.body.innerHTML)
        //window.eval('console.log("Ok", typeof window.commonES);')
        //console.log(window.commonES)

        //expect(namespace).toBe('com.example.ns1')
    })
})
