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
    var user_url = response.html_url;
    var repos_url = response.repos_url;

    $('.results').empty().append("<img class='avatar' src='" + avatar + "'><li><strong>name:</strong> <a target='_blank' href='" + user_url + "'>" + name + "</a></li><li><strong>number of repositories:</strong> <a target='_blank' href='" + repos_url + "'>" + repos + "</a></li><hr><ol class='repo_results'><p><strong>Repositories:</strong></p></ol>");

    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey + "&per_page=25").then(function(repo_item){

      $.each(repo_item, function(i) {
        var repo_name = repo_item[i].name;
        var repo_createdate = repo_item[i].created_at;
        var repo_url = repo_item[i].html_url;
        var repo_description = repo_item[i].description;
        if(repo_description === ""){
          repo_description = "<em>no description provided</em>";
        }
        console.log(repo_item);
        $('.repo_results').append("<li><a target='_blank' href='" + repo_url + "'>" + repo_name + "</a><p>date created: " + repo_createdate + "</p><p>description: " + repo_description + "</p></li>");
      });
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
  });






});
