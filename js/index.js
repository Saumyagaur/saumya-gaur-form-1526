// getting references
let fm = document.querySelector("form");
let fn = document.getElementById("fullname");
let msg = document.getElementById("message");
let email = document.getElementById("email");
// do the same for email


// event target object
let btn = document.getElementById("collect");

// event handler
function validateForm() {
    
    console.clear();
    // console.log("Click event handled!");
    
    let collectedData = {};
    let errors = [];
    
    // validater the fullname
    if (fn.value !== "") {
        collectedData.fname = fn.value;
    } else {
        errors.push("Full name is missing");
    }
    
    
    // validate your email
    /*
    referece- regular expressions library
    http://regexlib.com/Search.aspx?k=emails*/


    let emailfilter= /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$/;
    

    //extend the method test from the regular expression
    //pattern. Pass user input as a parameter of test().
    //test() returns true or false
    /*if (emailfilter.test(email)) {
        collectedData.emailadd = em.value;

    } else {
        errors.push("Email name is missing");
    }*/
    
    if(email.value !== ""){
       if(emailfilter.test(email.value)) {
            collectedData.emailadd = email.value;
        } else {
          errors.push("Email name is wrong");  
        }
    } else {
       errors.push("Email name is missing");
    }
    
    // validate the message
    if (msg.value !== "") {
        collectedData.message = msg.value;
    } else {
        errors.push("Message is missing");
    }
    
    // create the feedback if there is no errors
    if (errors.length === 0) {
        console.log(collectedData);
        fm.reset();
    } else {
        // print the error messages
        console.log(errors);
    }
    
    
    
}

btn.addEventListener("click", validateForm);
