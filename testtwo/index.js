require('chromedriver');
var webdriver=require('selenium-webdriver');
var driver=new webdriver.Builder().forBrowser('chrome').build();
function openBrowser(url){
    driver.get(url);
}
openBrowser('https://www.baidu.com/');
driver.manage().window().maximize();
openBrowser('https://www.bing.com/');
