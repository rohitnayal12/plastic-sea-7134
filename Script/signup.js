let signupbtn=document.getElementById("signupbtn");
signupbtn.addEventListener("click",savedata);
let signinbtn=document.getElementById("signinbtn")
// signinbtn.addEventListener("click",redirect);





function savedata(){


 
 let name=document.getElementById("name").value
 let email=document.getElementById("email").value
 let password=document.getElementById("password").value

//  console.log(name)
 let obj={
    name: name,
    email: email,
    password: password,
 };
 
 let userslist= JSON.parse(localStorage.getItem("userslist"))||[]

userslist.push(obj);


localStorage.setItem("userslist",JSON.stringify(userslist))
alert("Signup successful")
}

