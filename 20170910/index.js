describe('登录', function () {
    var assert = require('assert');
    require('chromedriver');
    var webdriver = require('selenium-webdriver');
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    var fs=require('fs');
    
    this.timeout(5000)
    before(function () {
        driver.manage().window().maximize();
    });

    after(function () {
        driver.close();
    });

    beforeEach(function () {
        // runs before each test in this block

    });

    afterEach(async function () {
       await driver.takeScreenshot().then(function (imagedata) {
           var day=new Date().valueOf();
            fs.writeFileSync(day+'.png', imagedata, 'base64')

        });
    });
    it('打开首页', async () => {
        await driver.get('http://192.168.75.107:3000/');
    });
    it('点击登录按钮', async () => {
        await driver.findElement({ linkText: '登录' }).click();
    });
    it('输入用户名和密码', async () => {
        await driver.findElement({ id: 'name' }).sendKeys('abcduxiaolei');
        await driver.findElement({ id: 'pass' }).sendKeys('abc4862556');
    });
    it('点击登录', async () => {
        await driver.findElement({ css: '.span-primary' }).submit();
    });
    it('assert', async () => {
      driver.findElement({linkText:'abcduxiaolei'}).getText().then((as)=>{
          console.log(as);
          assert.deepEqual('abcduxiaolei',as);
      })
    });
})