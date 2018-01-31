global.AV = require('leancloud-storage/live-query')

var APP_ID = process.env.AV_ID
var APP_KEY = process.env.AV_KEY

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
 

var user = new AV.User();
var randomUsername = 'Tom';
user.setUsername(randomUsername)
user.setPassword('leancloud');
user.set('avatar',avatar);
user.signUp().then(function (u){
    console.log(' ------ user created ------')
});