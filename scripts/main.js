// console.log("this is main.js")

let form =document.querySelector("#form");
form.addEventListener("submit",submitfun);
let user=JSON.parse(localStorage.getItem("user")) || [];

function submitfun(){
    event.preventDefault();
    let obj={
        name:form.name.value,
        email:form.email.value,
        address:form.address.value,
        amount:form.amount.value,
    }
    user.push(obj);
     console.log(user);

     localStorage.setItem("user",JSON.stringify(user));
     document.querySelector("#form").reset();
}
