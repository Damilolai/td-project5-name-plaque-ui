//step 1: store all your target in a variable)
let inputt = document.querySelector(".field-input")
let identity = document.querySelector(".name")
let amount = document.querySelector(".cost")

//step 2: declare your function//
function tab (some_data){
const user = some_data.replace(" ","")
const modal = user.length*5;
console.log ("username",some_data);
console.log ("userprice",modal);
identity.textContent = some_data;
amount.textContent = '$'+ modal;
}
//step 3: add event listerner on your function//
inputt.addEventListener("input",function(e){
tab(e.target.value)
})