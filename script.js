$(document).ready(function() {

  var names = ['Jayti','Carsten','Xiaocong','Alexander','Lukas','Paul','Anqi','Patrick','Jay','Niklas','Kira','Diana','Christian','Alyssa','Matthias'];


  $('.btn').click(function(e) {

    printName();

  })


  function randomNumberGenerator() {
    var randomNumber = Math.floor(Math.random()*names.length);
    return randomNumber;
  }

  function printName(smallArray, n) {

    $("#name").html(names[randomNumberGenerator()]);

  }


})
