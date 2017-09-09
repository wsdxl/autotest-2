require('chromedriver');
const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder().forBrowser('chrome').build();
let user = new Date().valueOf();
let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');
let url = 'mongodb://192.168.75.107:27017/node_club_dev';
// Connection URL 
driver.get('http://192.168.75.107:3000/');
driver.manage().window().maximize();
driver.findElement({ linkText: '注册' }).click();
driver.findElement({ id: 'loginname' }).sendKeys(user);
driver.findElement({ id: 'pass' }).sendKeys('123456');
driver.findElement({ id: 're_pass' }).sendKeys('123456');
driver.findElement({ id: 'email' }).sendKeys(`${user}@domain.com`);
driver.findElement({ className: 'span-primary' }).submit().then(() => {
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log('Connected correctly to server');
        let collection = db.collection("users");
        collection.findOne({ name: `${user}` }, function (arr, doc) {
            console.log(doc.name);
            assert.equal(null, arr);
        })
        collection.updateOne({ name: `${user}` }, { $set: { "active": true } }, function (arr, docs) {
            assert.equal(null, arr);
        })
        db.close();
    })
})


