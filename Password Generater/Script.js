let us = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let ls = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let sy = ` !@#$%^&*-_=+;:'",.?/~ `


let range = document.querySelector(".range")
let text = document.querySelector(".text")
let btn = document.querySelector(".btn")
let len = document.querySelector(".length")


let allchar = us + ls + num + sy;

range.addEventListener("input", () => {

    len.textContent = `PassWord length :${range.value}`
    console.log("move");
    
})

btn.addEventListener("click", () => {
    let  password = ""
    for(let i = 0 ; i<=range.value-1 ; i++){
        password += allchar[Math.floor(Math.random()*allchar.length)]
        text.value = password
        console.log(password);
        
    }
    
 
})





