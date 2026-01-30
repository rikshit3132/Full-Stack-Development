const commentContainer = document.querySelector(".comment-container");
commentContainer.addEventListener("click",(e)=>{
 if(e.target.getAttribute("class") === "reply"){
   const elem = e.target.closest(".comment");
   elem.appendChild(createInputBox());
 }
if(e.target.getAttribute("class") === "btn"){
//   const elem = e.target.parentNode.parentNode;
const elem = e.target.closest(".comment");
    const inputVal = document.querySelector(".input").value;
  elem.appendChild(createAddReply(inputVal));

  e.target.parentNode.remove();
}
});
function createInputBox(){
    const divEle = document.createElement("div");
    divEle.setAttribute("class","comment-reply-container");
    divEle.innerHTML = `<input type="text" placeholder="write your reply" class="input">
            <button class = "btn">Submit</button>`;
    return divEle;
}
function createAddReply(text){
    const divEle = document.createElement("div");
    // divEle.style.marginLeft = "4rem";
    divEle.setAttribute("class", "comment");
    divEle.innerHTML = `<div class="card">
            <div class="text">${text}</div>
            <div class="reply">Add Reply</div>
          </div>`;
    return divEle;
}