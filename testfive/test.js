/**
 * 链接数据库
 * 在数据库中 增、改、删、查 字段
 */
var MongoClient = require('mongodb').MongoClient
var assert = require('assert');
// Connection URL 
var url = 'mongodb://192.168.75.107:27017/node_club_dev';
// Use connect method to connect to the Server 
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    var collection = db.collection('documents');
    // Insert some documents 
    collection.insertMany([
        { a: 1 }, { a: 2 }, { a: 3 }
    ], function (err, result) {
        assert.equal(err, null);
        console.log(result.result);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the document collection");
    });
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        assert.equal(3, docs.length);
        console.log("Found the following records");
        console.dir(docs);
    });
    collection.updateOne({ a: 2 }
        , { $set: { b: 1 } }, function (err, result) {
            assert.equal(err, null);
            console.log(result.result)
            assert.equal(1, result.result.n);
            console.log("Updated the document with the field a equal to 2");
        });
        collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        assert.equal(3, docs.length);
        console.log("Found the following records");
        console.dir(docs);
    });
    collection.deleteOne({ a: 3 }, function (err, result) {
        assert.equal(err, null);
        console.log(result.result);
        assert.equal(1, result.result.n);
        console.log("Removed the document with the field a equal to 3");
    });
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        assert.equal(2, docs.length);
        console.log("Found the following records");
        console.dir(docs);
    });
   collection.deleteMany({})
   collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        assert.equal(0, docs.length);
        console.log("Found the following records");
        console.dir(docs);
    });

    db.close();
});