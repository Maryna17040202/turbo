let username = document.querySelector("#name");
let phone = document.querySelector("#phone");
let formName = document.querySelector(".input");
let valid = document.querySelector(".form-tel input");
let email = document.querySelector("#email");


let letters = /^[A-Za-z]+$/;
let telephone = /^[\+][\d]{3} \([\d]{2}\)\ [\d]{3}-[\d]{2}-[\d]{2}$/;
let emailInput = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;



username.addEventListener("blur", function(){

    if(username.value.match(letters) || formName.className == "input invalid")
        {
            formName.classList.remove("invalid");
        }
    else {
            formName.classList.add("invalid")
        }
});

phone.addEventListener("blur", function() {

    if (phone.value.match(telephone)) 
        {
            valid.style.cssText = 'border:#9A9EA6 solid 1px;'
        }

    else {
        valid.style.cssText = 'border: 1px solid red;'
    }
});

email.addEventListener("blur", function() {
    if (email.value.match(emailInput)) {
        email.style.cssText = 'border:#9A9EA6 solid 1px;'
    }
    else {
        email.style.cssText = 'border: 1px solid red;';
    }
})