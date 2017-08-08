require('chromedriver');
var webdriver=require('selenium-webdriver');
var By=webdriver.By;
let driver=new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.baidu.com/');
driver.manage().window().maximize();
driver.findElement(By.id('kw')).sendKeys('testing');
driver.findElement({className:'btn self-btn bg s_btn'}).click();
