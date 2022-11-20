function clearerror(){ 
clear=document.getElementsByClassName("formerror")
for ( key of clear){
    key.innerHTML="";
}
}

function seterror(id, error) {

    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateform() {
    clearerror();
    var returnval = true;

    var name = document.forms["myform"]["fname"].value;
    if (name.length < 5) {
        seterror("name", "*name must be of 5 letters !");
        returnval = false;
    }
 
    if (name.length==0 ) {
        seterror("name", "*name cannot be empty !");
        returnval = false;
    }

    var email=document.forms['myform']['femail'].value;
    if(email.length >16){
        seterror("email","*Email character must be less then 16 !")
        returnval=false;
    }

    var phone=document.forms['myform']['fphone'].value;
    if(phone.length != 10){
        seterror("phone","*Number must conatin 10 numeric digit !")
        returnval=false;
    }

    var pass =document.forms['myform']['pass'].value;
    var check=/(?=.*[!@#$%^&])/;
    if(pass.match(check)){
       returnval=true;
    } else{
        seterror("pass","*password must conatain one special character ")
        returnval=false;
    }
    
    
    var check=/(?=.*[0-9])/;
    if(pass.match(check)){
        returnval=true;
    } else{
        seterror("pass","*password must conatain one numeric digit")
        returnval=false;
    }

    
    var check=/(?=.*[A-Z])/;
    if(pass.match(check)){
        returnval=true;
    } else{
        seterror("pass","*password must conatain one upper case letter ")
        returnval=false;
    }

    var check=/(?=.*[a-z])/
    if(pass.match(check)){
     returnval=true;
    } else{
        seterror("pass","*password must conatain one lower case letter ")
        returnval=false;
    }
    
    if(pass.length=9){
       returnval=true;
    } else{
        seterror("pass","*password must conatain 9 digit")
        returnval=false;
    }

    password=document.forms['myform']["cpass"].value;
    
    if(password != pass){
        seterror("cpass","*Your password must match confirm password")
        returnval=false;
    }



   return returnval;
}