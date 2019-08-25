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

  Greeter.prototype = {
    fullName: function(){
      return this.firstname+' '+this.lastname;
    },

    validate: function(){
      if (supportedLangs.indexOf(this.language) === -1){
        throw 'Invalid language';
      }
    },

    greeting: function(){
      return greetings[this.language] + ' ' + this.firstname+' ! ';
    },

    formalGreeting: function(){
      return formalGreetings[this.language]+ ' '+this.fullName();
    },

    greet: function(formal){
      var msg;
      if(formal){
        msg =  this.formalGreeting();
      }else{
        msg =  this.greeting();
      }
      if(console){
        console.log(msg);
      }
      //'this' refers to the calling object at execution time makes the method chainable
      return this;
    },

    log: function(){
      if (console){
        console.log(logMessages[this.language]+' '+this.fullName());
      }

      return this;
    },

    setLang: function(lang){
      this.language = lang;
      this.validate();
      return this;
    }

  };

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
