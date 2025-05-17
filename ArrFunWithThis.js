


let para=document.getElementById("para")
function  greet(){
return  para.textContent="Normal function   :"+ "Hello!people";
}  

console.log(greet())

let parag=document.getElementById("parag")
let     grat=()=>{

    return parag.textContent="Arrow function  : "+"Hell!People!"
}
console.log(grat())

function sum(num1,num2){
    return  num1+num2;
} 
let num1=5
let num2=5
let result=sum(num1,num2)
console.log("The    sum    of  "+ num1 ,"+", num2 ,  " = "  ,   result  )

let arrsum=(n1,n2)  =>    n1 +   n2

console.log("The sum of  100  +   100" +"  = "    +   arrsum( 100,100))

let name="shahzaib"
setTimeout(()=>{
    console.log("This is world war AI!  " +   name)
},2000)

let fun={
    name:"shahzaib",
    class:"Eight",
   intro:()=>{
console.log(" Arrow function  : "+"My name is "+ fun.name + " I read in "  +  " class  "+fun.class     )
}


}
fun.intro()
let Fun={
    name:"shahzaib",
    class:"Eight",
   intro:()=>{
console.log("Function  :  "+    "My name is "+ this.name + " I read in "  +  " class  "+this.class     )
}


}
Fun.intro()








