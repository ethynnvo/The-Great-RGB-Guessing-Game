let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //modeButton listeners
    setupModeButtons();
    //setup Squares
    setupSquares();
    //reload page
    reset();
}

function setupSquares(){
    for(let i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
        //grab color of clicker square 
        let clickedColor = this.style.backgroundColor;
        //compare to pickedColor
        if(clickedColor === pickedColor){
            resetButton.textContent = "Play Again?";
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try Again";
        }
        });
    }
}

function setupModeButtons(){
    //modeButtons listeners
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function reset(){
    //generate new colors
   colors = generateRandomColors(numSquares);
   //pick new random color from array
   pickedColor = pickColor();
   //change colorDisplay to match picked color
   colorDisplay.textContent = pickedColor;
   resetButton.textContent = "New Colors";
   //change colors of the squares
   for(let i = 0; i < squares.length; i++){
       if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor =  colors[i];
       } else {
           squares[i].style.display = "none";
       }
   }
   h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    //loop through all squares
    for(let i = 0; i < squares.length; i++){
     //change each color to match given color
     squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    let arr = [];
    //repeat num times
    for(let i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    let r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    let g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}