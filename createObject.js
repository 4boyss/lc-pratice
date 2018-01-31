global.AV = require('leancloud-storage/live-query')

var APP_ID = process.env.AV_ID
var APP_KEY = process.env.AV_KEY

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
 
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  console.log('LeanCloud Rocks!');
})