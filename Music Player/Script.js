let main = document.querySelector("main")
let card = document.querySelector(".card")
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let allsongs = document.querySelector(".allsongs")
let footer = document.querySelector(".footer")
let back = document.querySelector(".back")
let play = document.querySelector(".play")
let forward = document.querySelector(".forward")


let arr = [
    {
        SongName:"Dooro Dooro Me",
        img:"./Image/img1.jpg",
        url:"./Song/Dooro Dooro Me.mp3"
    },
    {
        SongName:"Saiyaara",
        img:"./Image/img2.jpg",
        url:"./Song/Saiyaara.mp3"
    },
    {
        SongName:"Saiyaara",
        img:"./Image/img3.jpg",
        url:"./Song/Wake Up Sid.mp3" 
    },
    {
         SongName:"Dhun",
        img:"./Image/img4.jpg",
        url:"./Song/Dhun.mp3"
    }
]

arr.forEach((elem,idx)=>{
    console.log(elem , idx);
    
})
