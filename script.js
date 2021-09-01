// set querySelector values
const sketchGrid = document.querySelector('.grid-container');


// create divs and append to sketchGrid


function gridBuilder () {

    for (let i = 0; i < (16 * 16); i++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'grid-item';
        

        sketchGrid.append(gridDiv);

        gridDiv.addEventListener(
            "mouseover", function () {
                  
        gridDiv.style.background 
            = "black";
            })
    }
};

gridBuilder();

// reset grid color and show popup

function clearGrid () {

    const elements = document.getElementsByClassName("grid-item");

    for (let i = 0; i < elements.length; i++) {
    elements[i].style.background = "white"
    }

};

// Functions to randomize grid-item color on mouse hover

function random_rgba() {
    const o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function psychadelic () {

    const psychBackground = document.getElementById("full-page");

    const elem = document.getElementsByClassName("grid-item");

    
    while(elem[0]) {

        elem[0].parentNode.removeChild(elem[0])

    }

    for (let i = 0; i < (16 * 16); i++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'grid-item';
        

        sketchGrid.append(gridDiv);

        gridDiv.addEventListener(
            "mouseover", function () {
                  
        gridDiv.style.background 
            = random_rgba();
            })
    }

    psychBackground.style.backgroundImage = 'linear-gradient(35deg, rgba(131,58,180,1) 0%, rgba(29,178,253,1) 50%, rgba(252,176,69,1) 100%)';


};

// reset draw color to black

function normalMode () {

    const psychBackground = document.getElementById("full-page");
    
    const elem = document.getElementsByClassName("grid-item");
    
    while(elem[0]) {

        elem[0].parentNode.removeChild(elem[0])

    }

    for (let i = 0; i < (16 * 16); i++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'grid-item';
        

        sketchGrid.append(gridDiv);

        gridDiv.addEventListener(
            "mouseover", function () {
                  
        gridDiv.style.background 
            = "black";
            })
    }

    psychBackground.style.backgroundImage = 'none';

};

// change grid size

function gridSize (input) {

    const elem = document.getElementsByClassName("grid-item");

    
    while(elem[0]) {

        elem[0].parentNode.removeChild(elem[0])

        };

    for (let i = 0; i < (input); i++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'grid-item';
        

        sketchGrid.append(gridDiv);

        gridDiv.addEventListener(
            "mouseover", function () {
                    
        gridDiv.style.background 
            = "black";
            })
    }
};