
   //function with parameter and return values.
   //example1:
    function add(a,b){
        return a+b;
    }
    let result =add(2,3);
    console.log("result:"+result)//5

    //to check the number iseven or odd.
     function isEven(num){
        if(num%2===0){
            return "even";
        }else
        {
            return "odd";
        }
     }
     let result1=isEven(3);
     console.log("number is:"+result1)

    //example:
    function greets(name){
        return "hello"+name+"!";
    }
     
      let message = greets("siri");
      console.log(message)
     
     
      //function without parameter and return values.
     function greet(){
        console.log("hello welcome to bhimavaram......")
     }
     greet()

     //example:print numbers from 1to5.
     function printNumbers(){
        for(i=1;i<=5;i++){
            console.log(i)
        }
     }
     printNumbers()

    //example:
    function displaymessages(){
        console.log("helloworld i'm js");
    }
   displaymessages()






   //function without parameters and with return values.
    //example:
    function greetingmessage(){
        return "hello welcome to js"
    }
    console.log(greetingmessage())



    //function with parameters without return values.
    //example:
    function displaymessage(message){
        console.log(`displaymessage:${message}`)
    }
    displaymessage("hello welcome to our home!!!!!!!!")
    
    
    function addAndprint(a,b)
    {
        let sum = a+b;
        console.log("sum is :"+sum);
    }
    addAndprint(10,20)
 //default parameter:A default parameter allows you to assign a default value to a function parameter in case no argument (or undefined) is passed.

    function add(a = 0, b = 0) {
       return a + b;
    }
    console.log(add(10,20)); //output:30
    console.log(add(7));    //output:7 
    console.log(add());  //output:0


    function createuser(name ="ravi",age =20){
        console.log(`Name: ${name}, Age: ${age}`);
    }   
    createuser( );     
    createuser( ("rani"));
    createuser("raju",22);


    //function expression or variable function:

    //example:
    let sayhello = function hello(){
        return "hey hello i m here!!!!"
    };
    console.log(sayhello())


    let square = function(num){
        return num*num;
    }
    console.log(square(6))


    let name = function name(){
        return "siri";
    }
    console.log(name())

    //callback function:

     function homeWork(subject,callback){
        console.log(`starting my ${subject} homework.`)
        callback();
     }
     function finishedhomework(){
        console.log("finished my homework..... ")
     }
     homeWork("english",finishedhomework)


     function addNumbers(a,b,num){
        let result = a+b;
        num(result);
     }
     function displayresult(sum){
        console.log(`The sum is ${sum}`);
     }
     addNumbers(10,20,displayresult)




     function fruits(fruit,callback){
        console.log(`my fravouite fruit is ${fruit}`)
        callback();
     }
     function myfruit(){
        console.log("i love mangoes");
     }
     fruits("mango",myfruit)
    

     //recursive function:A function call inside another function.
     //example:
     function countdown(n){
        if(n<=0){
            console.log("done!!!!")
            return;
        }
        console.log(n)
        countdown(n-1);
     }
     countdown(20);



     function factorial(num){
        if(num===0||num===1){
            return 1; 
        }
         return num*factorial(num-1);
        }
      console.log(factorial(5));
    
  
   