


const container = document.querySelector(".star_component");
const allStar = document.querySelectorAll(".star");
const count  = document.querySelector("#count");
const emoji = document.querySelector("#emoji");
let getRating  = 0;
let hoverRating = 0;
container.addEventListener("click",(e) =>{
       console.log(e);
       const element = e.target;
       const hasAttribute = element.hasAttribute("idx");
       if (!hasAttribute) {
         return;
       }
        getRating = parseInt(element.getAttribute("idx"));
       fillStar(getRating);
       updateEmoji(getRating);

});
container.addEventListener("mouseover",(e) =>{
const element  = e.target;
 const hasAttribute = element.hasAttribute("idx");
 if (!hasAttribute) {
   return;
 }
  hoverRating = parseInt(element.getAttribute("idx"));
 removeHover(hoverRating);
 hoverFill(hoverRating);
updateEmoji(hoverRating);
});

container.addEventListener("mouseleave", (e) => {
    hoverRating = 0;
removeHover();
fillStar(getRating);
updateEmoji(getRating);
});

function fillStar(rating){
    removeColor();
    count.textContent = rating;
     
      for (let i = 0; i < rating; i++) {
        allStar[i].classList.add("green");
      }
}
function removeColor(){
    for (let i = 0; i < allStar.length; i++) {
      allStar[i].classList.remove("green");
    }
}
function hoverFill(rating){
 removeHover(); 
    for(let i = 0; i < rating; i++){
        allStar[i].classList.add("orange");
    }
}
function removeHover(){
    for (let i = 0; i < allStar.length; i++) {
      allStar[i].classList.remove("orange");
    }
}
function updateEmoji(rating){
    if (rating === 0) {
      emoji.textContent = "";
      return;
    }
    if (rating == 1) {
      emoji.textContent = "😠";
    } else if (rating == 2) {
      emoji.textContent = "😛";
    } else if (rating == 3) {
      emoji.textContent = "😐";
    } else if (rating == 4) {
      emoji.textContent = "😊";
    } else if (rating == 5) {
      emoji.textContent = "😘";
    }
}
document.addEventListener("click", (e) => {
  // if click is NOT inside star component
  if (!container.contains(e.target)) {
    getRating = 0;
    removeColor();
    removeHover();
    count.textContent = 0;
    emoji.textContent = '';
  }
});
