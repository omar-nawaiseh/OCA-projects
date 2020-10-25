
function localVal() {
    var username =document.getElementById("username").value;
    var email =document.getElementById("email").value;
    var phone =document.getElementById("phoneno").value;
    var birthday =document.getElementById("birthday").value;
    var password =document.getElementById("password").value;
    var check1 =document.getElementById("checkbox");
    var rename= /^[A-Za-z0-9]{5,20}/
    var remail=/^[A-Za-z0-9]{2,20}@[A-Za-z]{2,10}.[A-Za-z]{2,3}/
    var rephone=/^([009627]{6})([7-9]{1})([0-9]{7})/
    var repass=/^[A-Za-z0-9!@#$%^&*()?]{8,32}/
    if(rename.test(username)){
    if(remail.test(email)){
    if(rephone.test(phone)){
    if(repass.test(password)){
    if(check1.checked==true){
        localStorage.setItem(username,JSON.stringify([email,birthday,phone,password]))
        return true;
         }else{
             document.getElementById("Erorr_1").innerHTML='<div class="/alert alert-danger/" role="/alert/">A simple danger alert—check it out!</div>';
         return false;
         }
         }else{
               document.getElementById("Erorr_2").innerHTML='<div class="/alert alert-danger/" role="/alert/">A simple danger alert—check it out!</div>';
         return false;
         }           
         }else{
              document.getElementById("Erorr_3").innerHTML='<div class="/alert alert-danger/" role="/alert/">A simple danger alert—check it out!</div>';
         return false;
         }
        }else{
            document.getElementById("Erorr_4").innerHTML='<div class="/alert alert-danger/" role="/alert/">A simple danger alert—check it out!</div>';
        return false;
        }
        }else{
             document.getElementById("Erorr_5").innerHTML='<div class="/alert alert-danger/" role="/alert/">A simple danger alert—check it out!</div>';
        return false;
    }
}
                        
function sessionVal() {
    var username =document.getElementById("username").value;
    var email =document.getElementById("email").value;
    var phone =document.getElementById("phoneno").value;
    var birthday =document.getElementById("birthday").value;
    var password =document.getElementById("password").value;
    var check1 =document.getElementById("checkbox");
    var rename= /^[A-Za-z0-9]{5,20}/
    var remail=/^[A-Za-z0-9]{2,20}@[A-Za-z]{2,10}.[A-Za-z]{2,3}/
    var rephone=/^([009627]{6})([7-9]{1})([0-9]{7})/
    var repass=/^[A-Za-z0-9!@#$%^&*()?]{8,32}/
    if(rename.test(username)){
    if(remail.test(email)){
    if(rephone.test(phone)){
    if(repass.test(password)){
    if(check1.checked==true){
    sessionStorage.setItem(username,JSON.stringify([email,birthday,phone,password]))
        return true;
         }else{
             document.getElementById("Erorr_1").innerHTML='<div class="/alert alert-danger/" role="/alert/">A simple danger alert—check it out!</div>';
         return false;
         }
         }else{
               document.getElementById("Erorr_2").innerHTML='<div class="/alert alert-danger/" role="/alert/">A simple danger alert—check it out!</div>';
         return false;
         }           
         }else{
              document.getElementById("Erorr_3").innerHTML='<div class="/alert alert-danger/" role="/alert/">A simple danger alert—check it out!</div>';
         return false;
         }
        }else{
            document.getElementById("Erorr_4").innerHTML='<div class="/alert alert-danger/" role="/alert/">A simple danger alert—check it out!</div>';
        return false;
        }
        }else{
             document.getElementById("Erorr_5").innerHTML='<div class="/alert alert-danger/" role="/alert/">A simple danger alert—check it out!</div>';
        return false;
    }
}

function cleStor() {
    localStorage.clear()
    sessionStorage.clear()
 }