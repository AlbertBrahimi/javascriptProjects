function formValidation(event) {
    event.preventDefault();
  let email = document.getElementById("Email").value;
  let password = document.getElementById("Password").value;
  let emialValidation = document.getElementById("emailValidation");
  let passwordValidation = document.getElementById("passwordValidation");
  let passwordConfirm = document.getElementById("confrimPassword").value;
  let passwordConfirmation = document.getElementById("passwordConfirmation");
  let checkbox = document.getElementById("check");
  // deklarimi i variablave
  if (email === "" ) {
    emialValidation.innerText = "Please fill the Email field";
  } else if( !email.includes("@")){
    emialValidation.innerText = "Email must contain @";
  }  else if( password === ""){
    passwordValidation.innerText = "Please fill the Password field";
  }else if (password.length < 8) {
    passwordValidation.innerText = "Password must be 8 characters long";
  } else if( password !==passwordConfirm){
    passwordConfirmation.innerText = "Password does not match";
  } else if( !checkbox.checked){
    alert("Please agree to the terms and conditions")
    return false;
  }
  else {
    alert("Form Submitted Successfully");
  }
};
