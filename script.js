const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
//---------------------------------------------
var alertRedInput = "#8C1010";
var defaultInput = "rgba(10, 180, 180, 1)";


 window.onload=regist;
 function regist(){
     var formsection=document.getElementById("formsection");
     formsection.onsubmit=checkup;
 }
 function checkup(){
     var check=true;
     var fname=document.getElementById("fname").value;
     var lname=document.getElementById("lname").value;
     var em=document.getElementById("em").value;
     var password=document.getElementById("password").value;
     var password2=document.getElementById("password2").value;
     var phone=document.getElementById("telephone").value;

if (fname == ""){
//   document.getElementById("blankMsg").innerHTML = "**Fill the first name";  
alert("fill the first name");
return false;
}



if (!fname.match(/^[A-Za-z ]+$/)){
 //   document.getElementById("blankMsg").innerHTML = "**letters or space only!";
 alert("first name must include letter only");   
 return false;

}
if (lname == ""){
 //   document.getElementById("charMsg").innerHTML = "**Fill the last name";
 alert("fill the last name");  
 return false;  

}



if (!lname.match(/^[A-Za-z ]+$/)){
//    document.getElementById("charMsg").innerHTML = "**letters or space only!";
alert(" last name must be letter only");
    return false;

}


if (em == ""){
    alert("fill email");
    //document.getElementById("message0").innerHTML = "**email not correct!";
    return false;}


if (!em.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
 //   document.getElementById("message0").innerHTML = "**email not correct!";
 alert("email not correct!");  
 return false;}


 if(phone == ""){
    alert("fill the phone");  

    //document.getElementById("message00").innerHTML = "**Fill the telephone";
return false;
}



 if (!phone.match(/^[0-1]{2}[0-9]{9}$/)){
    alert("only 11 number 01xxxxxxxxx");
//    document.getElementById("message00").innerHTML = "**telephone must be 11 number only!";
        return false;
    }
if(password == ""){
//    document.getElementById("message1").innerHTML = "**Fill the password";
alert("fill the password");  
 
return false;
}
if(password.charAt(0) !=password.charAt(0).toUpperCase()){
alert(" password not start with uppercase letter");
return false;
}

if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/)){
   alert("password must include 8 characters and one digit at last and include one special character and no space ") ;
   return false;
}

if(password2 == ""){
  alert("confirm password");
return false;
}

if(password != password2) {  
 
    alert("must confirm password correct");
    return false;  
  } 

  if(password == password2) {  
 
    alert("submition correct ! thanks");
    return false;  
  } 
return check;
 }
