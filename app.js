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
