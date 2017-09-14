/**
 * 登录、发布话题、上传图片、链接、回帖、编辑回帖、删除回帖
 */
require('chromedriver')
const webdriver = require('selenium-webdriver')
let until = webdriver.until;
const driver = new webdriver.Builder().forBrowser('chrome').build()
driver.get('http://192.168.75.107:3000/')
driver.manage().window().maximize()
driver.findElement({ linkText: '登录' }).click();
driver.findElement({ id: 'name' }).sendKeys('abcduxiaolei');
driver.findElement({ id: 'pass' }).sendKeys('abc4862556');
driver.findElement({ css: '.span-primary' }).click();  //登录流程

driver.findElement({ id: 'create_topic_btn' }).click(); // 发布话题
driver.findElement({ id: 'tab-value' }).click();
driver.findElement({ css: '#tab-value>option:nth-child(2)' }).click() //选择板块nth-child(i)
// driver.findElement({xpath:'//*[@id="tab-value"]/option[2]'}).click();
driver.findElement({ id: 'title' }).sendKeys('很晚了，亲们');
driver.findElement({ css: '.eicon-image' }).click();
driver.findElement({ name: 'file' }).sendKeys('E://01.png');
driver.sleep(3000);
driver.findElement({ css: '.CodeMirror.cm-s-paper' }).click();// 进入div大块
let exec = driver.findElement({ xpath: '//*[@id="create_topic_form"]/fieldset/div/div/div[2]/div[6]/div[2]' });// div语句块  
driver.actions().mouseMove(exec).sendKeys('来张帅照，呵呵').perform(); //actions方式
driver.findElement({ className: 'span-primary submit_btn' }).submit();
driver.sleep(3000);
driver.findElement({ css: '.eicon-image' }).click();
driver.findElement({ name: 'file' }).sendKeys('F://图片//02.png');
driver.sleep(3000)
driver.findElement({ css: '.CodeMirror.cm-s-paper' }).click();
let ox = driver.findElement({ xpath: '//*[@id="reply_form"]/div/div/div[2]/div[6]/div[2]' });
driver.actions().mouseMove(ox).sendKeys('小伙子长得还不错吧?').perform();
driver.findElement({ xpath: '//*[@id="reply_form"]/div/div/div[3]/input' }).submit();

driver.sleep(2000);
driver.findElement({ css: '.edit_reply_btn' }).click();
driver.findElement({ css: '.CodeMirror.cm-s-paper' }).click();
let xo = driver.findElement({ xpath: '//*[@id="edit_reply_form"]/fieldset/div/div/div[2]/div[6]/div[2]' });
driver.actions().mouseMove(xo).sendKeys('很晚了，准备睡觉喽！').perform();
driver.findElement({ xpath: '//*[@id="edit_reply_form"]/fieldset/div/div/div[4]/input' }).submit();

driver.sleep(2000)
driver.findElement({ css: '.delete_reply_btn' }).click();
driver.switchTo().alert().then((alert) => {
    driver.sleep(3000);
    return alert.accept();
})
