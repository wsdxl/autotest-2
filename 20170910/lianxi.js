require('chromedriver')
const webdriver=require('selenium-webdriver')
let until=webdriver.until;
const driver=new webdriver.Builder().forBrowser('chrome').build()
driver.get('http://192.168.75.107:3000/')
driver.manage().window().maximize()
driver.findElement({linkText:'登录'}).click();
driver.findElement({id:'name'}).sendKeys('abcduxiaolei');
driver.findElement({id:'pass'}).sendKeys('abc4862556');
driver.findElement({css:'.span-primary'}).click();  //登录流程

driver.findElement({id:'create_topic_btn'}).click(); // 发布话题
driver.findElement({id:'tab-value'}).click();
driver.findElement({css:'#tab-value>option:nth-child(2)'}).click() //选择板块nth-child(i)
// driver.findElement({xpath:'//*[@id="tab-value"]/option[2]'}).click();
driver.findElement({id:'title'}).sendKeys('今天是星期三');
driver.findElement({css:'.eicon-link'}).click();
// driver.findElement({id:'editorToolImageTitle'})
driver.sleep(2000);
driver.findElement({xpath:'/html/body/div[4]/div[2]/form/div[1]/div/input'}).click()
driver.findElement({xpath:'/html/body/div[4]/div[2]/form/div[1]/div/input'}).sendKeys('打开百度首页');
driver.findElement({xpath:'/html/body/div[4]/div[2]/form/div[2]/div/input'}).clear()
driver.findElement({xpath:'/html/body/div[4]/div[2]/form/div[2]/div/input'}).sendKeys('https://www.baidu.com/');
driver.findElement({css:'.btn.btn-primary'}).click();
