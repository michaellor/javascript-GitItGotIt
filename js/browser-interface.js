// var Class = require('./../js/class.js').Class;
// var moment = require('moment');
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){



});

exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
