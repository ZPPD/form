/*function(event){
let userAge = document.getElementById('age');
let click = document.getElementById('btn');
if (isNaN(userAge)) {
	console.log("It looks like you didn't enter a number.");
} else if (userAge < 18) {
	console.log("You have to be over 18 to complete the form");
}})*/

/*let userAge = document.getElementById('age');
function event(userAge){
if(isNaN(userAge)){
    console.log('You have to enter your age');
    } else if(userAge < 18){
        console.log('You have to be over 18 to complete the form');
        } else {
            console.log('The age has been verified');
            }}
let click = document.getElementById('btn');
click.addEventListener('onclick', event(userAge));*/
   function checkFirstName() {
	    var firstName = document.getElementById("firstName").value;
	    if (firstName === "") {
		    alert("Please enter your First name.");
		    return false;
	    } else if (isNaN(firstName) === false) {
		    alert("Please enter a valid First name.");
		    return false;
	    };
       };
    function checkFamilyName(){
         var familyName = document.getElementById("familyName").value;
	    if (familyName === "") {
		    alert("Please enter your Family name.");
		    return false;
	    } else if (isNaN(familyName) === false) {
		    alert("Please enter a valid Family name.");
		    return false;
	    };
	};
  function checkAge() {
		var age = document.getElementById("age").value;
		if (age <= 0 || age >100 || isNaN(age)) {
			alert("Please enter your age in years using numbers only.");
			return false;
		} else if(age < 18){
      alert('You have to be over 18 to complete the form.');
      return false;
    }
	};
  //var tel = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
     function checkPhone() {
       var phoneInput = document.getElementById('phone').value;
       var tel = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
       var OK = tel.exec(phoneInput);
       if (!OK) {
         alert(phoneInput + ' isn\'t the correct phone input'); }
       else if(phoneInput = ""){
       alert("Please enter a phone number.") ;
       }
       };
 	function checkEmail() {
		var email = document.getElementById("email").value;
		var x = email.indexOf("@");
        var y = email.lastIndexOf(".");
        if (email === "") {
            alert ("Please enter a valid email address.");
            return false;
        } else if (x < 1 || y < x+2 || y+2 >= email.length) {
            alert("Please enter a valid email address.");
            return false;
        };
    };
    function checkMessage() {
  		var message = document.getElementById("msg").value;
  		if (message === "" || message.length < 3) {
  			alert("Please tell us why you're contacting us.");
  			return false;
  		};
  	};

	function checkGender() {
       var male = document.getElementById("male").checked;
       var female = document.getElementById("female").checked;

       if (!male && !female) {
           alert("Please select a gender.");
           return false;
       };
    };
/*$("#btn").click(function() {
                if(checkFirstName() === false){

			return false;
                } else if(checkFamilyName() === false){
                        return false;
                } else if (checkEmail() === false) {
			return false;
		} else if (checkAge() === false) {
			return false;
		} else if (checkGender() === false) {
			return false;
		} else if (checkMessage() === false) {
			return false;
		} else if (checkPhone() === false) {
      return false;
    }
});*/

  document.getElementById("btn").addEventListener('click', function(){
    if(checkFirstName() === false){
      return false;
    } else if(checkFamilyName() === false){
      return false;
    } else if (checkEmail() === false){
      return false;
    } else if(checkAge() === false){
      return false;
    } else if(checkGender() === false){
      return false;
    } else if(checkMessage() === false){
      return false;
    } else if(checkPhone() === false){
      return false;
    }

  });
