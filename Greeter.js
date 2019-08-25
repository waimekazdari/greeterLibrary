(function(global, $) {

  var Greeter = function(firstname, lastname, language) {
    return new Greeter.init(firstname, lastname, language);
  }

  //{ these variables
  var supportedLangs = ['es', 'en'];

  var greetings = {
    en : 'Hello',
    es : 'Holla',
  };

  var formalGreetings = {
    en : 'Greetings',
    es : 'Saludos',
  };

  var logMessages = {
    en : 'Logged in' ,
    es : 'Inicio sesion',
  };

  //} are not something exposed to the outside world

  Greeter.prototype = {};

  Greeter.init = function(firstname, lastname, language){
    //any object built here will have access to any method and property built in Greeter.prototype
    var self = this;
    self.firstname = firstname || ' ';
    self.lastname = lastname || ' ';
    self.language = language || 'en';
  }

  Greeter.init.prototype = Greeter.prototype;
  global.Greeter = global.G$ = Greeter;
}(window, jQuery));
