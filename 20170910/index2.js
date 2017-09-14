/**
 * 登录、发布话题、上传图片、链接、回帖、编辑回帖、删除回帖
 */
describe('登录', function () {
    var assert = require('assert');
    require('chromedriver');
    var webdriver = require('selenium-webdriver');
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    var fs = require('fs');

    this.timeout(14000)
    before(function () {
        driver.manage().window().maximize();
    });

    after(function () {

    });

    beforeEach(function () {
        // runs before each test in this block

    });

    afterEach(async function () {
        await driver.takeScreenshot().then(function (imagedata) {
            var day = new Date().valueOf();
            fs.writeFileSync('image/' + day + '.png', imagedata, 'base64')
        })
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
        driver.findElement({ linkText: 'abcduxiaolei' }).getText().then((as) => {
            console.log(as);
            assert.deepEqual('abcduxiaolei', as);
        })
    });
    it('点击发布话题', async () => {
        await driver.findElement({ className: 'span-success' }).click();
    });
    it('选择分享下拉列表，输入标题', async () => {
        await driver.findElement({ id: 'tab-value' }).click();
        await driver.findElement({ css: '#tab-value>option:nth-child(2)' }).click();
        await driver.findElement({ id: 'title' }).sendKeys('今天是星期二');
    });
    it('添加图片', async () => {
        await driver.findElement({ css: '.eicon-image' }).click();
        await driver.findElement({ name: 'file' }).sendKeys('E://01.png');
    });
    it('点击链接', async () => {
        await driver.sleep(2000);
        await driver.findElement({ css: '.eicon-link' }).click();
        await driver.sleep(2000);
        await driver.findElement({ xpath: '/html/body/div[4]/div[2]/form/div[1]/div/input' }).click()
        await driver.findElement({ xpath: '/html/body/div[4]/div[2]/form/div[1]/div/input' }).sendKeys('打开百度首页');
        await driver.findElement({ xpath: '/html/body/div[4]/div[2]/form/div[2]/div/input' }).clear()
        await driver.findElement({ xpath: '/html/body/div[4]/div[2]/form/div[2]/div/input' }).sendKeys('https://www.baidu.com/');
        await driver.findElement({ css: '.btn.btn-primary' }).click();
        await driver.findElement({ css: '.span-primary.submit_btn' }).submit();
    });
    it('添加回复_照片', async () => {
        await driver.sleep(2000);
        await driver.findElement({ css: '.eicon-image' }).click();
        await driver.findElement({ name: 'file' }).sendKeys('F://图片//02.png');
    });
    it('添加回复_内容', async () => {
        await driver.sleep(2000);
        await driver.findElement({ css: '.CodeMirror.cm-s-paper' }).click();
        let oc = driver.findElement({ xpath: '//*[@id="reply_form"]/div/div/div[2]/div[6]/div[2]' });
        await driver.actions().mouseMove(oc).sendKeys('大家晚上好！').perform();
        await driver.findElement({ xpath: '//*[@id="reply_form"]/div/div/div[3]/input' }).submit();
    });
    it('编辑回复', async () => {
        await driver.sleep(2000);
        await driver.findElement({ css: '.edit_reply_btn' }).click();
        await driver.findElement({ css: '.CodeMirror.cm-s-paper' }).click();
        let xo = driver.findElement({ xpath: '//*[@id="edit_reply_form"]/fieldset/div/div/div[2]/div[6]/div[2]' });
        await driver.actions().mouseMove(xo).sendKeys('很晚了，准备睡觉喽！').perform();
        await driver.findElement({ xpath: '//*[@id="edit_reply_form"]/fieldset/div/div/div[4]/input' }).submit();
    });
    it('删除回复', async () => {
        await driver.findElement({ css: '.delete_reply_btn' }).click();
        await driver.switchTo().alert().then((alert) => {
            return alert.accept();
        })
    });
})

