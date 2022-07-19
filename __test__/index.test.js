const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to Google.com
beforeAll(async () => {
    //await driver.get('http://127.0.0.1:5500/movieList/index.html')
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
    await driver.sleep(2000);
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})
test('testing movie List website', async ()=>{
    const theButton = await driver.findElement(By.css('button'))
    await theButton.click();
    await driver.sleep(2000)

    const movieNameCheck = await driver.findElement(By.css('span.checked'));
    await movieNameCheck.click();
    await driver.sleep(2000);

    const movieNameUncheck = await driver.findElement(By.css('span.checked'))
    await movieNameUncheck.click();
    await driver.sleep(2000);

    const deleteButton = await driver.findElement(By.css('span.checked'));
    await deleteButton.click();
    await driver.sleep(2000);


});