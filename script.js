const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");

const createGrid = (size) => {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

const updateGrid = () => {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );
  createGrid(userInput.value);
};

const changeSquareColor = (e) => {
  if (e.buttons === 1) {
    e.target.style.backgroundColor = "black";
  } else if (e.buttons === 2) {
    e.target.style.backgroundColor = "red";
  }
};

userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function () {
  grid.innerHTML = "";
  userInput.value = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid(16);
});

createGrid(16);

grid.addEventListener("mousedown", (e) => {
  e.preventDefault();
  changeSquareColor(e);
});

grid.addEventListener("mouseover", (e) => {
  e.preventDefault();
  if (e.buttons === 1 || e.buttons === 2) {
    changeSquareColor(e);
  }
});
