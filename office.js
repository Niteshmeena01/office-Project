
//  function pomp(player) {
//     return new Promise(function(resolve,reject) {
//         if (player) {
//             resolve("hey this is resolve")
//         }else{
//             reject("hey this is reject")
//         }
//     })
//  }
 
 
// let solve = (solve)=> console.log(solve);

// let problem = (problem)=> console.log(problem);

// pomp(true).then(solve)
// pomp(false).catch(problem)

// when you want to use multiple promises like :-

// this is the syntax of multiple promises

// let p1 = new Promise(function(resolve,reject) {
//     console.log("this is first promise");
//     resolve("hello this first resolve")
// })
// let p2 = new Promise(function(resolve,reject) {
//     console.log("this is second promise");
//     resolve("hello this second resolve")
// })
// let p3 = new Promise(function(resolve,reject) {
//     console.log("this is third promise");
//     resolve("hello this third resolve")
// })

// Promise.all([p1,p2,p3]).then((result)=>{
//     console.log(result);
// }).catch((value)=>{
// console.log(value);
// })

// let obj= {
//     age:18,
//     name:"nitesh",}

// let obj2 = {
//     salary :"18000",
//     __proto__:obj
// }  
// console.log(obj2);  
// let obj3 = {
  
// }
 
// To use of prototype you can make any function according to you 
//    just like this 
// Array.prototype.show = function(){
//     return this
// }

// const array = ["nitesh"];
// console.log(array.show());

// learning async

// let a = [
//     {name:"nitesh",Profession:"softwareEngineer"},
//     {name:"rahul",Profession:"softwareEngineer"}
// ]


// function getData() {
//     setTimeout(()=>{
//         a.forEach((data, index) => {
//             return console.log(data.name);
//           })
//     },5000) 
    
    
    
    
// }


// function newData() {
//     setTimeout(()=>{
//         a.forEach((data, index) => {
//             return console.log(data.name);
//           })
//     },3000) 
        

// }

// let a = {name:"nitesh",age:"22"}
// let b ={name:"harsh",age:"20"} 


// function getData() {
//     return a.name
// }
// function newData() {
//     return b.name
// }
// let c =  new Promise((resolve,reject)=>{
//          return  setTimeout(()=>{
//          let error = true
//             if (!error) {
//                 resolve()
//             } else {
//                 reject()
//             }
//           },1000)
// })
// console.log(c.then(getData).catch(newData));

// function data() {
//        var xhttp = new XMLHttpRequest();
//        xhttp.onreadystatechange = function(){
//         if (this.readyState == 4 && this.onreadystatechange == 200) {
            
//         } 
//        }
// }
// Nested loop syntax 
// you can use loop in loop are nested loop 
// var array = [["Nitesh"],[18],["male"]]
// var b = array.splice(-1,)
// console.log(array);
//  for( a = 0; a <= array.length; a++){
//      for(b = a ; b <= 3;b++){
//         console.log(array[b]);
//      }
//  }
  
// var a = {name:"nitesh",
//          age :22,
//         sex:"male"}
// for (const obj in a) {
//     console.log(obj+": " +a[obj]);
//     }
     
// var array = ["nitesh","rahul","vignesh","bhlaal Dev"]
// console.log(array.map(value));
// function value(x) {
//     return x + " meena"
// }

// var a = "hello guys i'm here typing"
// split method use for make a new in string  
// console.log(a.split(" "));
// console.log(a.endsWith("typing"));

// var element ;
// element = document.body;
// console.log(element);



// let style = document.getElementById("Ratata")
//     style.addEventListener("click",abc)
//     function abc() {
//         this.style.background="green"
//         this.style.border="20px solid yellow "
//     }

