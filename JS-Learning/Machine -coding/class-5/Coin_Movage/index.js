const tBody = document.querySelector(".tbody");
const input = document.querySelector("#grid_size");
const generator = document.querySelector(".generator");
let ridx = 0;
let cidx = 0;
let rowsize = 0;
let colsize = 0;
generator.addEventListener("click",()=>{
    tBody.textContent = ""; 
    if (input.value === "") {
      alert("Please Enter Grid Size First!!!");
      return;
    }
const value = parseInt(input.value);
if(value <= 0 || value > 10){
    alert("Negatives,0 and value > 10 not allowed");
    return;
}
const row  = 2 * value;
const col = 2 * value;
rowsize = row;
colsize = col;
for(let i = 0; i < row; i++){
    const tr = document.createElement("tr");
    for(let j = 0; j < col; j++){
        const td = document.createElement("td");
        td.classList.add("box");
        tr.appendChild(td);
    }
    tBody.append(tr);
     ridx = 0;
     cidx = 0;
     updateCell();
}
generator.style.backgroundColor = "red";
});
generator.addEventListener("mouseleave",() =>{
    generator.style.backgroundColor = "teal";
});


const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const upBtn = document.querySelector(".up");
const downBtn = document.querySelector(".down");


leftBtn.addEventListener("click",() =>{
    if(input.value === ""){
        alert("Please Enter Grid Size First!!!");
        return;
    }
    cidx--
    if(cidx < 0){
        cidx = 0;
        alert("can't move left or no left cell exist");
        return;
    }
    leftBtn.style.backgroundColor = "red";
    updateCell();
});
rightBtn.addEventListener("click", () => {
    if (input.value === "") {
      alert("Please Enter Grid Size First!!!");
      return;
    }
    cidx++;
    if(cidx >= colsize){
        cidx = colsize - 1;
        alert("can't move right or no right cell exist");
        return; 
    }
    rightBtn.style.backgroundColor = "red";
    updateCell();
});
downBtn.addEventListener("click", () => {
    if (input.value === "") {
     alert("Please Enter Grid Size First!!!");
      return;
    }
    ridx++;
    if(ridx >= rowsize){
        ridx = rowsize - 1;
        alert("can't move down or no down cell exist");
        return;
    }
    downBtn.style.backgroundColor = "red";
    updateCell();
});
upBtn.addEventListener("click", () => {
    if (input.value === "") {
     alert("Please Enter Grid Size First!!!");
      return;
    }
    ridx--;
    if(ridx < 0){
        ridx = 0;
        alert("can't move up or no up cell exist");
        return;
    }
    upBtn.style.backgroundColor = "red";
    updateCell();
});

leftBtn.addEventListener("mouseleave", () => {
  leftBtn.style.backgroundColor = "teal";
});
rightBtn.addEventListener("mouseleave", () => {
  rightBtn.style.backgroundColor = "teal";
});
upBtn.addEventListener("mouseleave", () => {
  upBtn.style.backgroundColor = "teal";
});
downBtn.addEventListener("mouseleave", () => {
  downBtn.style.backgroundColor = "teal";
});
function updateCell() {
  const allBox = document.querySelectorAll(".box");
  allBox.forEach((box) => {
    box.classList.remove("borderchange");
    const dot = box.querySelector(".silver");
    if(dot){
        dot.remove();
    }
  });

  const index = ridx * colsize + cidx;
  if (index >= 0 && index < allBox.length) {
    const dot = document.createElement("div");
    dot.classList.add("silver");
    allBox[index].classList.add("borderchange");
    allBox[index].appendChild(dot);
  }
}

