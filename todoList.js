let input = document.getElementById("input")
let button = document.getElementById("button")
let list = document.getElementById("list")



button.addEventListener("click",(buttn)=>{
    let ul = document.createElement("ul")
     let task =list.appendChild(ul)
    if (buttn){
        task.innerHTML = input.value +`<i class="fa-solid fa-trash" style="margin-left:40px;"></i> `
        input.value = ""
    } 
})

list.addEventListener("click",(task)=>{
    console.log(task.target.ul.innerText);
})




