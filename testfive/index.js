require('chromedriver');
const webdriver=require('selenium-webdriver');
const driver=new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://192.168.75.107:3000/');
driver.manage().window().maximize();