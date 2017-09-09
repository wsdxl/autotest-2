/**
 * https://github.com/adamgruber/mochawesome
 * 测试报告
 */


var assert = require('assert');

require('chromedriver')

describe('测试用户注册登录', function () {
    this.timeout(60 * 1000)
    let webdriver = require('selenium-webdriver')
    let driver = new webdriver.Builder().forBrowser('chrome').build();

    describe('注册用户', function () {
        it("导航到登录页面", async function () {
            await driver.get("http://192.168.75.107:3000")
        });
        it("点击注册按钮", async function () {
            await driver.findElement({ css: '[href="/signup"]' }).click()
        });
        it("导航到用户注册页面", async function () {
            let singupurl = await driver.getCurrentUrl();
            return assert.equal("http://192.168.75.107:3000/signup", singupurl)
        });
        it("输入注册信息", async function () {
            let user = new Date().valueOf();
            driver.findElement({ id: 'loginname' }).sendKeys(user);
            driver.findElement({ id: 'pass' }).sendKeys('123456');
            driver.findElement({ id: 're_pass' }).sendKeys('123456');
            driver.findElement({ id: 'email' }).sendKeys(`${user}@domain.com`);
            driver.findElement({ className: 'span-primary' }).submit()
        });

    });

});
