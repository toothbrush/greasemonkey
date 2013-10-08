// ==UserScript==
// @name        Grooveshark title
// @namespace   org.denknerd.groovesharktitle
// @description Makes the page title reflect the current song.
// @include     http://www.grooveshark.com*
// @include     https://www.grooveshark.com*
// @include     http://grooveshark.com*
// @include     https://grooveshark.com*
// @version     1
// @grant       none
// ==/UserScript==

var song;
var artist;

function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);var title;var song;var artist;("
      + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

function getSong()
{
    artist = jQ('#now-playing-metadata a:last').html();
    song = jQ('#now-playing-metadata a:first').html();

    title = artist+' - '+song;

    $('title').html(title);
    setTimeout(function(){(getSong)();},500);

}

// load jQuery and execute the main function
addJQuery(getSong);
