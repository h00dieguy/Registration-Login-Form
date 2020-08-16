function validateForm() {
  var fname = document.myForm.fname.value;
  var lname = document.myForm.lname.value;
  var email = document.myForm.email.value;
  var pwd = document.myForm.pwd.value;
  var contact = document.myForm.contact.value;
  var zipcode = document.myForm.zipcode.value;
  var birthplace = document.myForm.bp.value;
  var language = document.myForm.lang.value;
  var city = document.myForm.city.value;
  var dis = document.myForm.district.value;
  var atposition=email.indexOf("@");
  var dotposition=email.lastIndexOf(".");
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;


if (fname == "") {
    document.getElementById("numloc").innerHTML="ERROR: Please enter your First Name!";
    return false;
  }

  if (lname == "") {
    document.getElementById("numloc").innerHTML="ERROR: Please enter your Last Name!";
    return false;
  }


  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){
    document.getElementById("numloc").innerHTML="ERROR: Email address should be valid!";
    console.log("atpostion:"+atposition+"\n dotposition:"+dotposition);
    return false;
  }

  if(pwd<6){
  document.getElementById("numloc").innerHTML="ERROR: Password must be at least 6 characters long!";
  return false;
  }

  if (birthplace == "") {
    document.getElementById("numloc").innerHTML="ERROR: Please enter your Birth Place!";
    return false;
  }

  if (language == "") {
    document.getElementById("numloc").innerHTML="ERROR: Please enter your Language!";
    return false;
  }

  if (city == "") {
    document.getElementById("numloc").innerHTML="ERROR: Please enter your City Name!";
    return false;
  }

  if (dis == "") {
    document.getElementById("numloc").innerHTML="ERROR: Please enter your District Name!";
    return false;
  }

  if (isNaN(zipcode)){
    document.getElementById("numloc").innerHTML="ERROR: Zip code should consist only NUMBERS!";
    return false;
  }

  if (isNaN(contact)){
    document.getElementById("numloc").innerHTML="ERROR: Contact should consist only NUMBERS!";
    return false;
  }



return alert("Registration Successful!");
}
