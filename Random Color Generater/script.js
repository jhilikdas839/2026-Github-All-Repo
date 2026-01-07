let body = document.querySelector(".body")
let btn = document.querySelector(".btn")
let h1 =document.querySelector(".h1")

btn.addEventListener("click", ()=>{
   let color = `#${Math.random().toString(16).slice(2,8)}`
   console.log(color);
   
   body.style.backgroundColor = color;
   h1.textContent=color;
})