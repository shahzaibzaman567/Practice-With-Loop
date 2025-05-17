//         const   user={
//             username:"shahzaib",
//             price:222,
//             welcome:function(){
//                 console.log(this.username+",Welcome  to  my  website")
//                 console.log(this)
//             }
//         }
//         user.welcome()
// user.username="shah"
// user.welcome()
// console.log(this)

function   chai(){
    let username="shahzaib"
console.log(this.username)
}

chai()
let addtwo=(num1,num2)=>({username:"ranasinayaer"})

console.log(addtwo(2,3))
console.log(this)



let     x={
    name:"shah",
    class:"8"
    ,welcome:()=>{
        console.log(this.name+"welcome  to  my  website")
    }
}
console.log(x)
x.welcome()

//Map   method  uses
//creat a   new array   without changing    first   array  
let mystudent=["sara","ali","omar"]
console.log(mystudent)

let map=mystudent.map((name)  =>  {
    return "Hello     "+name+" !" 
   
})
console.log(map)

let    maparray=mystudent.map((value,index,array)=>{
console.log(value,index,array)
return  value+" "+index+" "+array

}) 

console.log(maparray)
// array filter  method
let arr=[3,13,43,4443,29,20]
let arrmap=arr.filter((val)=>{
    return  val<30
}
)
console.log(arrmap)

// Reduce   method  
let arr1=[1,2,3,4,5]

let reduce=arr1.reduce((val1,val2)=>{
    return  val1+val2

})

console.log(reduce)



