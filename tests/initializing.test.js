'use strict';

/*
 * Testing if the commonES class was properly initialized.
 */

describe("The commonES instance should exist and ", () => {
    beforeAll(async () => {
        await page.goto("http://localhost:3000/index.html")
    })

    test(" should have a function called .ns()", async () => {
        // Checking if commonES.ns() exists
        expect(await page.evaluate(() => {
            return typeof commonES.ns
        })).toBe('function')
    })

    test(" should have a function called .register()", async () => {
        // Checking if commonES.register() exists
        expect(await page.evaluate(() => {
            return typeof commonES.register
        })).toBe('function')
    })

    test(" should have a function called .require()", async () => {
        // Checking if commonES.require() exists
        expect(await page.evaluate(() => {
            return typeof commonES.require
        })).toBe('function')
    })

    test(" should have a function called .createUUID()", async () => {
        // Checking if commonES.createUUID() exists
        expect(await page.evaluate(() => {
            return typeof commonES.createUUID
        })).toBe('function')
    })
})
