let h1= document.querySelector(".h1")
let inp= document.querySelector(".inp")
let img= document.querySelector(".img")
let btn= document.querySelector(".btn")

btn.addEventListener("click",()=>{
    let inpValue = inp.value;
    console.log(inpValue);
    if(inpValue ==""){
        alert("Plz Put Your Valid Url for Generate QR Code")
    }else
        img.src=(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpValue}`)
        img.style.display="block"
        
    

    
    
})