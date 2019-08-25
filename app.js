var g = G$('wiame', 'kazdari');

console.log(g);//Greeter.init {firstname: "wiame", lastname: "kazdari", language: "en"}

console.log(g.greet()); //Hello wiame !
// Greeter.init {firstname: "wiame", lastname: "kazdari", language: "es"}

console.log(g.greet(true));// Greetings wiame kazdari
// Greeter.init {firstname: "wiame", lastname: "kazdari", language: "es"}

console.log(g.setLang('es').greet());// Holla wiame !
// Greeter.init {firstname: "wiame", lastname: "kazdari", language: "es"}

//chainable methods
console.log(g.greet().greet(true).setLang('es').greet().greet(true));// =>
        //Hello wiame !
        // Greetings wiame kazdari
        // Holla wiame !
        // Saludos wiame kazdari
        // Greeter.init {firstname: "wiame", lastname: "kazdari", language: "es"}

//let's use our object on click of the login button
$("#login").click(function(){
  //create Greeter object with our library
  var loginGr = G$('wiame', 'kazdari');

  // hide the login on the screen
  $('.logindiv').hide();

  //fire off an HTML greeting, passing the '#greeting' as the selector and the chosed language, and log the welcome as well
  loginGr.setLang($("#lang").val()).HTMLGreetings("#greeting").log();
});
