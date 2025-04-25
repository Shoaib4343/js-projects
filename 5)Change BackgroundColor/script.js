let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let section = document.querySelector("section");
let box = document.querySelector("#box")
let hex1 = "#000000";
let hex2 = "#ffffff";

section.style.backgroundImage = `linear-gradient(to right, ${hex1}, ${hex2})`;

const hexaGenerator = () => {
  let myHexa = "123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += myHexa[Math.floor(Math.random() * myHexa.length)];
  }
  return color;
};

let handleBtn1 = () => {
  let color = hexaGenerator();
  hex1 = color;
  section.style.backgroundImage = `linear-gradient(to right, ${hex1}, ${hex2})`;
  box.innerText = `background-image:linear-gradient(to right, ${hex1}, ${hex2})`;
};
let handleBtn2 = () => {
  let color = hexaGenerator();
  hex2 = color;
  section.style.backgroundImage = `linear-gradient(to right, ${hex1}, ${hex2})`;
  box.innerText = `background-image:linear-gradient(to right, ${hex1}, ${hex2})`;

};

btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);
box.addEventListener('click',()=>{
    navigator.clipboard.writeText(box.innerText)
    alert('Code Copy successfuly.')
})
