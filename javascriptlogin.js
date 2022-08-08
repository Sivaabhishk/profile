alert("hi,Siva Abhishek R");
const loginform=document.getElementById("loginform");
console.log(loginform);
// query selector use pannalam illa get element pannalam const loginform=document.querySelector("#loginform")id na # podanum illa class na . podanum
const verifylogin=function(name,pass) {
	if(name=="siva"&&pass=="pa"){
		return "login success"
	}else{
		return " incorrect details"
	}
}

const name=document.getElementById("firstname")
const pass=document.getElementById("pass")

loginform.addEventListener("login",(u)=>{


	u.preventDefault()
	console.log(name)
	console.log(pass)
	console.log(verifylogin(name,pass))
});
