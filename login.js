function validateForm() {

  var username = document.myForm.username.value;
  var pwd = document.myForm.pwd.value;

if (username == "") {
  document.getElementById("numloc").innerHTML="Please enter your Username";
  // fname.focus();
  return false;
}

if(pwd<6){
document.getElementById("numloc").innerHTML="Password must be at least 6 characters long.";
return false;
}


return alert("Login Successful!");
}


function forgotpass() {
  alert("We will send Password Reset link to registered email!");
}
