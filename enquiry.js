function submitForm(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let country=document.getElementById("country").value;

document.getElementById("message").innerHTML=
"Thank you "+name+"! Your enquiry has been received.";

}
