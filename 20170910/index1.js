describe('hooks', function () {
var assert = require('assert');
require("chromedriver");
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser("chrome").build();
var fs = require("fs")
let user = new Date().valueOf()
let By = webdriver.By

describe('test', function () {
this.timeout(60*1000)
before(function () {
driver.manage().window().maximize()
});

after(function () {

driver.quit();
});

beforeEach(function () {

console.log("beforeeach")
});

afterEach(function () {
driver.takeScreenshot().then(function (tupian) { // 截图
fs.writeFileSync('user.png',tupian, 'base64')
})
});

// test cases


it('打开浏览器输入网址',async function () {
await driver.get("http://192.168.75.107:3000/")

});

it('点击登录', async function () {
await driver.findElement(By.css("body > div.navbar > div > div > ul > li:nth-child(6) > a")).click()

});
it('输入账号密码',async function () {
await driver.findElement(By.id("name")).sendKeys("xiangjianqun")
await driver.findElement(By.id("pass")).sendKeys("123456")

});
it('登录', async function () {
await driver.findElement(By.css("#signin_form > div.form-actions > input")).click()
assert.equal(-1, [1, 2, 3].indexOf(5));

});

it('点击发布',async function () {
await driver.findElement(By.css("#create_topic_btn > span")).click()
});


});
});