let   table   = Number(  prompt("Enter    any     number"))
//  console.log(typeof table)
 let    number=  1
 while(number   <=  10 ){

         console.log(table,"     *   ",number,"   =   ",table*number)
         
         number=++number
 }


let array=["jewish","muslim","chritan","handoesam"]
let A=0
while(A<array.length){
console.log(A,"value  of  "+array[A])
A=++A

}
score=11
do{
console.log("val   of  score    :   "+score)
score=score+1
}while(score <=   10  )

let count=0
while(count<=5){
console.log("count  :   " , count )
count=++count
}

let firstpassword=prompt("Enter   Pasward ")
let passward=""
while(passward!==firstpassword){
passward=prompt("Enter   a   vaild   paswar  please  try again")


}
alert("dar  ka  your    passward    is  correctt")

let boolean=true
i=0


let x=0
do{
if(x%2===0){
console.log(x)
}
++x
}while(x<=20)

// let Pass=prompt("shahzaib")
do{
Pass=prompt("Enter  a   vailed  passward")
if(Pass==="shahzaib"){
alert("passward is  correct")
}
}while(Pass!=="shahzaib")



do{
guss=Number(prompt("Number gussing game"))
if(guss === 2){
alert("you  won 100 rupes   :     ")
}
}while(guss !==  2)




// // CHAT      KA  Diya    Howa

// var i = 0;
// do {
//     alert(i);  // Ye ek dafa execute hoga, chahe condition false ho
//     i++;
// } while (i < 0);


// // CHAT      KA  Diya    Howa
// var password = "";
// while (password !== "1234") {
//   password = prompt("Enter password:");
// }
// alert("Access granted!");
