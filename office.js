
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