// var moment = require('moment');
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){

  var reposArray = [];

  $('#userinput').submit(function(event){
    event.preventDefault();

  var username = $('#username').val();

  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){

    var name = response.name;
    var avatar = response.avatar_url;
    var repos = response.public_repos;

    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(repo_item){

      $.each(repo_item, function(i, item) {

        var repo_name = repo_item[i].name;
        var repo_createdate = repo_item[i].created_at;
        var repo_url = repo_item[i].html_url;
        console.log(repo_name);
        console.log(repo_createdate);
        console.log(repo_url);
      });
    });

    $('.results').append("<img class='avatar' src='" + avatar + "'><li>name: " + name + "</li><li>number of repositories: " + repos + "</li><hr>");

    $('.repo_results').append("public repositories:" + repo_name);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
  });






});
