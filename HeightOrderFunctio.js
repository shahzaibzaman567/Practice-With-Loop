 // بر: +92-51-2221701/02
        // function a(b){
        //     console.log(b);
        // }
        // a("shahzaib  hay")
        // function  Hello(){
        //     console.dir(Hello)""

        // }
        // a(Hello("HelloWOrld"))
        function  sum(a,b,ab){

            let result=a+b 
        
            ab(result)
            return function (){
                console.log(result)
            }
        }
        let RESULT=sum(2,2,function(){
            console.log()
        })
        RESULT()
        
        
        function operation(x,y,xy){
        let result=x-y
        xy(result)
        return console.log("Number SUBTRACT horaha ha");
        } 
        operation(3,555 ,function (val){
            
            console.log("HO GAY!",val)
        }    
        )
        //PRACTICE
        
        function chai(banrahiha,chaibangayiha){
        banrahiha()  
        chaibangayiha()
        
        }
        chai (function  banrahiha(val)
        {
            console.log("shaheer ,mojataba , kari, cha banrahi  ha ")
            setTimeout(function(){
               console.log("zay ma kinay lag sabar okay jori gi  ")
            },4000) 
        },
        function  chaibangayiha(value){
        
        setTimeout(function(){
            console.log("DA Wala Cha Tayara Shwa")
        },8000)
        }
        )
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // KASHIF PRACTICE
        //         console.log("you are not allowed")
        //     }
                
        // }
            
            
        // }
        
        // const data = cck();
        
        // data("ali");
        
        
        
        // PRACTICE
        
        // function greet(name){
        //     return function( Hello   ){
        //         console.log(Hello + ","  +name)
        //     }
        // }
        // let  greetname=greet("shah")
        // greetname("hello")
        
        // PRACTICE
        
        
        
        // // Higher-order function
        // function greet(name) {
        //     return function(message) {
        //         console.log(message + ', ' + name);
        //     }
        // }
        
        // // Calling the function
        // const greetJohn = greet('John');  // greet function returns a new function
        // greetJohn('Hello');  // Outputs: Hello, John
        
        