
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const sub=document.getElementById("fun");
sub.addEventListener("click",()=>{
    const username=document.getElementById("username").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const reenterpassword=document.getElementById("reenterpassword").value;
        
    if (isNaN(username) ){
        document.getElementById("num").innerHTML="UserName Valid"
        document.getElementById("num").style.color="green"
        document.getElementById("use").style.marginTop="-15px";
        document.getElementById("username").style.border="block";
        document.getElementById("username").style.border="3px solid green";
        
     } else if (username ==""){
        const num= document.getElementById("num");
        num.innerHTML ="Invalid Username";
        document.getElementById("use").style.marginTop="-15px";
        document.getElementById("username").style.border="block";
        document.getElementById("num").style.color="red"
        document.getElementById("username").style.border="3px solid red";
     }
     else {
        const use= document.getElementById("use");
        use.innerHTML ="numbers not allowed";
        document.getElementById("username").style.border="3px solid red";
    }

    if (email == ""){
        const ediv=document.getElementById("ediv");
        ediv.innerHTML="invalid email";
        document.getElementById("ediv").style.color="red";
        document.getElementById("email").style.border="3px solid red";
    }else if(email.match(mailformat)){
        const ediv=document.getElementById("ediv");
        ediv.innerHTML="Valid Email";
        document.getElementById("ediv").style.color="green";
        document.getElementById("email").style.border="3px solid green";
    }else{
        const ediv=document.getElementById("ediv");
        ediv.innerHTML="invalid email";
        document.getElementById("ediv").style.color="red";
        document.getElementById("email").style.border="3px solid red";
    }

    if (password == ""){
        const pdiv=document.getElementById("pdiv");
        pdiv.innerHTML="invalid password";
        document.getElementById("pdiv").style.color="red";
        document.getElementById("password").style.border="3px solid red";
    } else {
        document.getElementById("pdiv").innerHTML="Password Valid";
        document.getElementById("pdiv").style.color="green";
        document.getElementById("password").style.border="3px solid green";
    }

    if (reenterpassword == ""){
        const rpdiv=document.getElementById("rpdiv");
        rpdiv.innerHTML="invalid password";
        document.getElementById("rpdiv").style.color="red";
        document.getElementById("reenterpassword").style.border="3px solid red";
    } else if(password != reenterpassword){
        const mis=document.getElementById("rpdiv");
        mis.innerHTML="password mismatch";
        document.getElementById("rpdiv").style.color="red";
        document.getElementById("reenterpassword").style.border="3px solid red";
    }else{
        document.getElementById("rpdiv").innerHTML="Password Valid";
        document.getElementById("rpdiv").style.color="green";
        document.getElementById("reenterpassword").style.border="3px solid green";
    }

    if( username==""|| !isNaN(username)|| !email.match(mailformat)|| email=="" || password==""|| password != reenterpassword|| reenterpassword == ""){
        alert("invalid");
      }

})

let count=0;
let count1=0;

function fontawe(){
    if(count%2==0){
    document.getElementById("password").type="none";
    document.getElementById("eyeca").style.display="none";
    }else{
        document.getElementById("password").type="password";
        document.getElementById("eyeca").style.display="block"; 
    }
    count++;
}
function fontawee(){
    if(count1%2==0){
    document.getElementById("reenterpassword").type="none";
    document.getElementById("eyecaa").style.display="none";
    }else{
        document.getElementById("reenterpassword").type="password";
        document.getElementById("eyecaa").style.display="block"; 
    }
    count1++;
}