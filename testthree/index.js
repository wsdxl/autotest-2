require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
// driver.get('https://www.baidu.com/');
// driver.manage().window().maximize();
// var gengduo=driver.findElement({name:'tj_briicon'});
// driver.actions().mouseMove(gengduo).perform();
// driver.sleep(3000);
// driver.findElement({name:'tj_mp3'}).click();
// driver.getAllWindowHandles().then((win)=>{
//     console.log(win.length)
//     driver.switchTo().window(win[0]);
// driver.close();
// })
// driver.get('https://www.baidu.com/');
// driver.manage().window().maximize();
// driver.findElement({ id: 'kw' }).sendKeys('hello');
// driver.findElement({ id: 'kw' }).submit();
// driver.sleep(5000);
// driver.findElement({ xpath: '//*[@id="2"]/h3/a' }).click();
// driver.getAllWindowHandles().then((win) => {
//     driver.switchTo().window(win[0]);
//     driver.close();
//     driver.switchTo().window(win[1]);
//     driver.sleep(3000);
// })
// driver.takeScreenshot().then((img) => {
//     require('fs').writeFileSync('01.png', img, 'base64');
// })
// driver.sleep(3000);
// driver.navigate().back();
// driver.sleep(3000);
// driver.navigate().forward();
// driver.sleep(3000);
// driver.navigate().refresh();
// var path=require('path');
// driver.get('https://www.baidu.com');
// var pngpath=path.join(__dirname,'/01.png');
// driver.findElement({css:'.soutu-btn'}).click();
// driver.findElement({css:'.upload-pic'}).sendKeys(pngpath);


// driver.get('https://www.baidu.com');
// var path = require('path');
// var dirpath = path.join(__dirname, 'image');
// // var day =new Date().valueOf();
// var day = Date.now();
// driver.takeScreenshot().then((imp) => {
//     require('fs').writeFileSync(dirpath + '/' + day + '.png', imp, 'base64') // 截屏到指定文件夹
// })

driver.get('file:///E:/index.html');   // alert按钮无法查找元素的处理方法

driver.switchTo().alert().then(function(alert) {
    driver.sleep(5000)
    return alert.accept();
});