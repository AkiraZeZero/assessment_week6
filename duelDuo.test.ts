// import { Builder, Capabilities, By } from "selenium-webdriver"

// require('chromedriver')

// const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// beforeEach(async () => {
//     driver.get('http://localhost:3000/')
// })

// afterAll(async () => {
//     driver.quit()
// })

// test('Title shows up when page loads', async () => {
//     const title = await driver.findElement(By.id('title'))
//     const displayed = await title.isDisplayed()
//     expect(displayed).toBe(true)

//     await driver.sleep(2000)
// })

// test(`Should Add to bot duo`, async () => {
//     const draw = await driver.findElement(By.id('bot-btn'))
//     const displayed = await draw.isDisplayed()
//     expect(displayed).toBe(true)
// })

// test('displays bot choices', () => {
//     expect('')
// })