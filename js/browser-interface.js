var getRepos = require('./../js/getRepos-interface.js').getRepos;
// var moment = require('moment');
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){

  var reposArray = [];

  $.get('https://api.github.com/users/michaellor?access_token=' + apiKey).then(function(response){
    console.log(response);

    var name = response.name;
    var avatar = response.avatar_url;
    var repos = response.public_repos;
    reposArray.push(repos);
    console.log(name)
    console.log(avatar)
    console.log(repos)
    console.log(reposArray)
    $('.results').append("<li>username: " + name + " <img class='avatar' src='" + avatar + "'></li><li>number of repositories: " + repos + "</li>");

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });



  $('#userinput').submit(function(event){
    event.preventDefault();

  var username = $('#username').val();
  var repos = getRepos(username);

  });


});
