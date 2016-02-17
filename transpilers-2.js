"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arr = [1, 2, 3];
arr.map(function (num) {
  return num * 2;
});

var Person = (function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  Person.prototype.sayHello = function sayHello() {
    return "Hello " + this.name;
  };

  return Person;
})();
