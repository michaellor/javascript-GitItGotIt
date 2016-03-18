var getRepos = require('../js/query.js').getRepos;
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){

  $('#userinput').submit(function(event){
    event.preventDefault();

  var username = $('#username').val();
  var results = getRepos(username);
  });
});
