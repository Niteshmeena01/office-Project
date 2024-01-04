// Destructuring array
 
// let arry = ["nitesh",22,"jaipur"]

// let [Name,...age] = arry

// console.log(age);


//     let promp = new Promise((resolve,reject)=>{
//         let i = 0
//       if (i == 0) {
//           resolve("hey this is resolve")
//          } else {
//             reject("hey this promise is reject")
//          }
//   })

// let newFunction = (reject)=>{
// console.log(reject);
// }

// let resolveFunction = (resolve)=>{
//     console.log(resolve);
//     }
// console.log(promp.catch(newFunction).then(resolveFunction));


// let onload = ()=>{
//     let newXttp = new XMLHttpRequest();
//     newXttp.onreadystatechange = function (){
//      if (this.readystate == 4 && this.status == 200) {
//        console.log(this.responseText);
//    }
// }
// newXttp.open('GET',"newFolder/readme.txt",true)
// newXttp.send()
// }
// console.log(onload());



// function onLoad(){
//     let text = new XMLHttpRequest();
//     text.onreadystatechange= function (){
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.responseText);
//             document.getElementById("txt").innerHTML= this
//         }
//     }
//     text.open('GET',"/readme.txt",true)
//     text.send()    
// }

/* how to get data with Ajax  */

// function onLoad() {
//     let data = new XMLHttpRequest();

//     data.onreadystatechange = function(){
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("txt").innerHTML = this.responseText
//         }
//     }
// data.open('GET',"nex.txt",true)
// data.send()
// }


const options = {
	method: 'GET',
	// headers: {
	// 	'X-RapidAPI-Key': '262219d14emsh75b162d91a5e223p1ed8a4jsn3084febc219a',
	// 	'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	// }
};



const getApi = async ()=>{
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1',options)
	const res = await response.text()
    const result = JSON.parse(res)
    document.getElementById("txt").innerHTML=result.id
    document.getElementById("one").innerHTML=result.userId
    document.getElementById("new").innerHTML=result.title
}

getApi()

