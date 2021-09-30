let yourName = "Revlis Go"; // HINT: Replace this with your own name!

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`;

// We'll use these variables to track the counts of each cookie type
let gb = 0;      // Ginger bread
let cc = 0;      // Chocolate Chip
let sugar = 0;   // Sugar Sprinkle
let total = 0;   // Total count of each cookie

// table cells
let gingerVotesCell = document.querySelector('#qty-gb');
let chocolateVotesCell = document.querySelector('#qty-cc');
let sugarVotesCell = document.querySelector('#qty-sugar');
let totalVotesCell = document.querySelector('#qty-total');

//------------------------

// Event listener for clicks on the "+" and "-" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function(){
    let gb  = parseInt(gingerVotesCell.textContent);
    let total = parseInt(totalVotesCell.textContent);
    
    gb = gb + 1;
    gingerVotesCell.textContent = gb;

    // add to total
    total = total + 1;
    totalVotesCell.textContent = total;

    console.log('gb count is', gb);
})

document.getElementById('minus-gb').addEventListener('click', function(){
    let gb  = parseInt(gingerVotesCell.textContent);
    let total = parseInt(totalVotesCell.textContent);

    // if gb is zero or less, stop decrementing. Otherwise, decrement
    if (gb <= 0){
        gb = 0;
        console.log('gb stopped at', gb);
    } else {
        gb = gb - 1;
        gingerVotesCell.textContent = gb;

        // subtract from total
        total = total - 1;
        totalVotesCell.textContent = total;

        console.log('Ginger count down by 1', gb);
    }
})

//------------------------

// Event listener for clicks on the "+" and "-" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function(){
    let cc  = parseInt(chocolateVotesCell.textContent);
    let total = parseInt(totalVotesCell.textContent);

    cc = cc + 1;
    chocolateVotesCell.textContent = cc;

    // add to total
    total = total + 1;
    totalVotesCell.textContent = total;
})

document.getElementById('minus-cc').addEventListener('click', function(){
    let cc  = parseInt(chocolateVotesCell.textContent);
    let total = parseInt(totalVotesCell.textContent);

    // if cc is zero or less, stop decrementing. Otherwise, decrement
    if (cc <= 0){
        cc = 0;
        console.log('cc stopped at', cc);
    } else {
        cc = cc - 1;
        chocolateVotesCell.textContent = cc;

        // subtract from total
        total = total - 1;
        totalVotesCell.textContent = total;

        console.log('Chocolate count down by 1', cc);
    }
})

//-------------------------

// Event listener for clicks on the "+" and "-" button for Sugar Sprinkle cookies
document.getElementById('add-sugar').addEventListener('click', function(){
    let sugar  = parseInt(sugarVotesCell.textContent);
    let total = parseInt(totalVotesCell.textContent);

    sugar = sugar + 1;
    sugarVotesCell.textContent = sugar;

    // add to total
    total = total + 1;
    totalVotesCell.textContent = total;
    console.log('Chocolate count up by 1', sugar);
})

document.getElementById('minus-sugar').addEventListener('click', function(){
    let sugar  = parseInt(sugarVotesCell.textContent);
    let total = parseInt(totalVotesCell.textContent);

    // if sugar is zero or less, stop decrementing. Otherwise, decrement
    if (sugar <= 0){
        sugar = 0;
        console.log('sugar stopped at', sugar);
    } else {
        sugar = sugar - 1;
        sugarVotesCell.textContent = sugar;

        // subtract from total
        total = total - 1;
        totalVotesCell.textContent = total;

        console.log('sugar count down by 1', sugar);
    }
})