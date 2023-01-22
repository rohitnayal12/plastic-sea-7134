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
            alert("Login Successful");
        }
        else{
            alert("Wrong email or Password")
        }
        
    });


    // console.log(user_record.password)
    
    // if((emailEl==user_record.email) && (passwordEl==user_record.password))
    //     {
    //         alert("Login pass");
    //     }
    //     else{
    //         alert("login fail")
    //     }




}