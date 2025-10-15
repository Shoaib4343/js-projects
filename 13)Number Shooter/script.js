const numberOfCircles = 45;
const main_conatainer = document.querySelector(".main_conatainer");
const timer_container = document.querySelector(".timer");
const target_container = document.querySelector(".target_container");
const score_container = document.querySelector(".score_container");
let target;
let timer = 5;
let sv = 0;


// generate target
const generateTarget = ()=>{
    target = Math.ceil(Math.random()*10);
    target_container.innerText = target
    console.log(target)
}

// call generate target when code is run on the first time
generateTarget();




const interval = setInterval(() => {
  if (timer <= 0) {
    clearInterval(interval);

    // show Game Over + final score + restart button
    main_conatainer.innerHTML = `
      <div style="text-align:center; margin-top:50px;">
        <h1>Game Over</h1>
        <h2>Your Score: ${sv}</h2>
        <button id="restartBtn" style="
          margin-top:20px; 
          padding:10px 20px; 
          font-size:16px; 
          cursor:pointer; 
          background:teal; 
          color:white; 
          border:none; 
          border-radius:8px;">
          Restart Game
        </button>
      </div>
    `;

    // restart logic
    const restartBtn = document.querySelector("#restartBtn");
    restartBtn.addEventListener("click", () => {
      location.reload(); // refresh the page (easy reset)
    });

    return;
  }

  timer--;
  timer_container.innerText = timer;
}, 1000);


for(let i=1; i<= numberOfCircles; i++){
    const div = document.createElement("div")
    div.classList.add("circle")
    const randomNumber = Math.ceil(Math.random()*10)
    div.innerText = randomNumber;
    main_conatainer.append(div)
}


// Event elegation
main_conatainer.addEventListener("click",(event)=>{
    if(event.target.className === "circle"){
        const number = Number(event.target.innerText);
        if(number === target){
            sv+=10;
            score_container.innerText = sv;
        }
        generateTarget();   
    }
})