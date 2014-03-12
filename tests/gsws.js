// ===========================
// gsws.js - the library to test getting-started-with-selenium
// this library just contains the functions to make the getting-started-with-selenium.htm file dynamic for the Proof of Concept.
// 
// author: ddavison
// ===========================

$(document).ready(function() {


  // click
  $("div#click").click(function() {
    $(this).addClass("success");
  });

})