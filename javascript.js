const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const button = document.getElementById("button")
const inputFields=document.querySelectorAll("input")

button.addEventListener("click", function(){
if(Array.from(inputFields).filter(el=>el.value!== "").length===inputFields.length){
return password.value === confirmPassword.value?alert("Jobs done"):alert("Passwords don't match")
}return alert("Please finish the form")
})