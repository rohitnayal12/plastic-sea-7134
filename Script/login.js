let loginbtn=document.getElementById("loginbtn");
loginbtn.addEventListener("click",validate);
user_record=JSON.parse(localStorage.getItem("userslist"))
// console.log(user_record)
function validate(){


 
    

    let emailEl=document.getElementById("email").value
    let passwordEl=document.getElementById("password").value


    
    
    user_record.forEach((element) => {

        if((emailEl==element.email) && (passwordEl==element.password))
        {
            alert("Login pass");
        }
        else{
            alert("login fail")
        }
        
    });
   




}