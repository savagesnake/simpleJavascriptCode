// Typically we use these types of objects to pass data
var mySpecialObject = {

        someProperty: "Foo",
        someOtherProperty: "Bar",
        8: "WTF?",
        mySpecialFunction: function () {
            return "I'm a special function";
        }
};
// mySpecialObject.someProperty
// mySpecialObject.someOtherProperty
// mySpecialObject.mySpecialFunction()
// use square brackets '[]' to index it similar to a hash.
// mySpecialObject[8]

// to be able  to create different instances of an object, I can use a constructor function to accomplish this
var Person = function(firstName,lastName,ssn){
//     private methods and vars 
    var ssn = ssn;  
    var that = this
    
    function getLastFour(){
        // i can use 'that' here to refer to 'this' Person properly
        // this inside of a private method like this gets scoped globally
        // I do not need 'this.' to access private vars & methods of this object.
      console.log(that);
      return ssn.substring((ssn.length-4),ssn.length);
      //       end of getLastfour()
       }
//   public vars and functions
      this.firstName = firstName;
      this.lastName = lastName;
      
      this.maskedSSN = function(){
        return "XXX-XX-" + getLastFour();
        };
  
//   end of person constructor
};


// Prototypes allow me to add methods to the object. 

Person.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}
Person.prototype.initials = function(){
  return this.firstName[0]+ ". " + this.lastName[0]+".";
}

var Kevin = new Person("Kevin","Solorio","12345679");

// console.log(Kevin.initials())
// console.log(Kevin.maskedSSN());

// Object.create() - object creation alternative
// I can define a set of functions as a hash and pass it to the Object.create(). This will add all the functions to prototype.

var behavior = {
  fullName: function(){
      return this.firstName+" "+this.lastName;
  // end of function fullname
  },
  initials: function() {
      return this.firstName[0]+". "+this.lastName[0]+".";
    // end of function initials
  }

// end of behavior
};

var person = Object.create(behavior);

person.firstName = "Jon";
person.lastName = "Smith";

console.log(person.initials());
