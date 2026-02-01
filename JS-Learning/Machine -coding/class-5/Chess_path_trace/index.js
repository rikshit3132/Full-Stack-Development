let allCells;
let selectedOne = "none";
window.addEventListener("load", (e) => {
  let tableBody = document.querySelector("#tableBody");

  for (let ri = 0; ri < 8; ri++) {
    let tr = document.createElement("tr");
    for (let ci = 0; ci < 8; ci++) {
      const td = document.createElement("td");
      td.classList.add("box");
      // td.setAttribute("class","box");
      //   td.setAttribute("data-index", `${ri}-${ci}`);
      td.dataset.ri = ri;
      td.dataset.ci = ci;
      // td.textContent = `${ri}-${ci}`;
      if ((ri + ci) % 2 == 0) {
        td.classList.add("white");
      } else {
        td.classList.add("black");
      }
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  }
  allCells = document.querySelectorAll(".box");
});
const table = document.querySelector("table");
const chessBoard = document.querySelector("#chessboard");
chessBoard.addEventListener("change", (e) => {
  selectedOne = e.target.value;
});
table.addEventListener("click", (e) => {
  const cell = e.target.closest(".box");
  //   console.log(cell);
  if (!cell) {
    return;
  }
 clearHighlights();
  const ri = Number(cell.dataset.ri);
  const ci = Number(cell.dataset.ci);
  //   console.log(ri,ci);
  addRedDot(cell);
  if(selectedOne === "bishop"){
    highlightBishop(ri, ci);
  }else if(selectedOne === "rook"){
    highlightRooks(ri,ci);
  }else if(selectedOne === "queen"){
highlightBishop(ri, ci);
  highlightRooks(ri, ci);
  }else if(selectedOne === "knight"){
  highlightKnight(ri,ci);
  }else{
    removeRedDot();
  }
});
table.addEventListener("mouseleave", (e) => {
  clearHighlights();
});


// function clearHighlights() {
//   allCells.forEach((cell) =>{ 
//     cell.classList.remove("yellow")
//      cell.classList.remove("red");
// });
// }

function highlightBishop(ri, ci) {
  // ↗ Right Top
  let r = ri - 1,
    c = ci + 1;
  while (r >= 0 && c < 8) {
    addGreenDot(allCells[r * 8 + c]);
    r--;
    c++;
  }

  // ↖ Left Top
  r = ri - 1;
  c = ci - 1;
  while (r >= 0 && c >= 0) {
     addGreenDot(allCells[r * 8 + c]);
    r--;
    c--;
  }

  // ↘ Right Bottom
  r = ri + 1;
  c = ci + 1;
  while (r < 8 && c < 8) {
     addGreenDot(allCells[r * 8 + c]);
    r++;
    c++;
  }

  // ↙ Left Bottom
  r = ri + 1;
  c = ci - 1;
  while (r < 8 && c >= 0) {
     addGreenDot(allCells[r * 8 + c]);
    r++;
    c--;
  }
}

// rooks
function highlightRooks(ri,ci){
  // up
  for(let r = ri - 1; r >= 0; r--){
    addGreenDot(allCells[r * 8 + ci]);
  }
  // down
  for (let r = ri + 1; r < 8; r++) {
    addGreenDot(allCells[r * 8 + ci]);
  }

  // right
  for (let c = ci + 1; c < 8; c++) {
    addGreenDot(allCells[ri * 8 + c]);
  }

  // left
  for (let c = ci - 1; c >= 0; c--) {
    addGreenDot(allCells[ri * 8 + c]);
  }
}
// knight
function highlightKnight(ri, ci) {
  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  for (let i = 0; i < moves.length; i++) {
    const r = ri + moves[i][0];
    const c = ci + moves[i][1];

    if (r >= 0 && r < 8 && c >= 0 && c < 8) {
      addGreenDot(allCells[r * 8 + c]);
    }
  }
}
function addGreenDot(cell) {
  if (cell.querySelector(".dot.green")) return;

  const dot = document.createElement("span");
  dot.classList.add("dot", "green");
  dot.textContent = "🔥";
  dot.style.fontSize = "20px";
  cell.appendChild(dot);
}

function addRedDot(cell) {
  // only ONE red dot at a time
  removeRedDot();

  const dot = document.createElement("span");
  dot.classList.add("dot", "red");
  dot.textContent = "🟡";
  dot.style.fontSize = "20px";
  cell.appendChild(dot);
}

function removeRedDot() {
  document.querySelectorAll(".dot.red").forEach((dot) => dot.remove());
}

function clearHighlights() {
  allCells.forEach((cell) => {
    cell.querySelectorAll(".dot.green").forEach((dot) => dot.remove());
  });
  removeRedDot();
}
