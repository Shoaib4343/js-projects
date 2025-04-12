let box = document.querySelector(".box");
let btn = document.querySelector(".btn")
let cross = document.querySelector("span")

btn.addEventListener('click',function(){
    box.classList.add('addBox')
})

cross.addEventListener("click",function(){
    box.classList.remove("addBox")
})
