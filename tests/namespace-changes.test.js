'use strict';

describe("The commonES instance can set and switch namespaces ...", () => {
    beforeAll(async () => {
        await page.goto("http://localhost:3000/index.html")
    })

    test("Setting namespace to com.example.ns1", async () => {
        await page.evaluate(() => {
            return commonES.ns('com.example.ns1')
        })

        let namespace = await page.evaluate(() => {
            return commonES.namespace
        })

        expect(namespace).toBe('com.example.ns1')
    })

    test("Setting namespace to com.example.ns2", async () => {
        await page.evaluate(() => {
            return commonES.ns('com.example.ns2')
        })

        let namespace = await page.evaluate(() => {
            return commonES.namespace
        })

        expect(namespace).toBe('com.example.ns2')
    })

    test("Checking the list of existing namespaces", async () => {
        let namespaces = await page.evaluate(() => {
            return commonES.namespaces
        })

        expect(namespaces['com.example.ns1']).toBeDefined()
        expect(namespaces['com.example.ns2']).toBeDefined()
    })
})
