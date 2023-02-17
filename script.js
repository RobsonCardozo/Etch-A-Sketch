// Selecionando elementos da DOM
const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");

// Cria a grade inicial
function createGrid() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
}

// Atualiza a grade com o tamanho selecionado pelo usuário
function updateGrid() {
  grid.innerHTML = "";
  grid.style.setProperty("grid-template-columns", `repeat(${userInput.value}, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(${userInput.value}, 2fr)`);
  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
}

// Altera a cor do quadrado ao passar o mouse sobre ele
grid.addEventListener("mouseover", function(event) {
  if (event.target.matches(".square")) {
    event.target.classList.add("color");
  }
});

// Atualiza a grade quando o usuário seleciona um novo tamanho
userInput.addEventListener("change", updateGrid);

// Reinicia a grade para o tamanho inicial quando o botão "RESET" é clicado
resetButton.addEventListener("click", function() {
  grid.innerHTML = "";
  userInput.value = "";
  grid.style.setProperty("grid-template-columns", "repeat(16, 2fr)");
  grid.style.setProperty("grid-template-rows", "repeat(16, 2fr)");
  createGrid();
});

// Cria a grade inicial quando a página é carregada
createGrid();
