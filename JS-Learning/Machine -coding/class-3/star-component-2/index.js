const container = document.querySelector(".container");
const allStars = document.querySelectorAll(".star");
const count = document.querySelector(".count");
const emoji = document.querySelector(".emoji");


let getStar = 0;

container.addEventListener("click", (e) => {
  const val = e.target.getAttribute("id");
  if (!val) {
    return;
  }
  getStar = Number(val);
  if(typeof getStar === NaN){
    return;
  }
  clearAll();
  addGreen(getStar);
  updateEmoji(getStar);

  count.textContent = getStar;
  
});
container.addEventListener("mouseover", (e) => {
  const val = e.target.getAttribute("id");
  if (!val) {
    return;
  }
  let currEle = Number(val);
  clearAll();
  addBlue(currEle);
  updateEmoji(currEle);
});
container.addEventListener("mouseleave",()=>{
   clearAll();
   addGreen(getStar);
   updateEmoji(getStar);
})
function clearAll() {
  allStars.forEach((val) => {
    val.classList.remove("green");
    val.classList.remove("blue");
  });
}
function addGreen(idx) {
  for (let i = 0; i < idx; i++) {
    allStars[i].classList.add("green");
     
  }
}
function addBlue(idx) {
  for (let i = 0; i < idx; i++) {
    allStars[i].classList.add("blue");
  }
}
function updateEmoji(count){
  if(count == 0){
     emoji.textContent = "";
     return;
  }
  if (count == 1) {
    emoji.textContent = "😟";
  } else if (count == 2) {
    emoji.textContent = "😢";
  } else if (count == 3) {
    emoji.textContent = "😲";
  } else if (count == 4) {
    emoji.textContent = "😎";
  } else if (count == 5) {
    emoji.textContent = "😍";
  }
}

document.addEventListener("click", (e) => {
  if (!container.contains(e.target)) {
    emoji.textContent = "";
    count.textContent = "0";
    getStar = 0;
    clearAll();
  }
});