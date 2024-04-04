// COIN FLIP SIMULATOR

let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

let numHeads = 0;
let numTails = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", flipCoin);

function flipCoin() {
    let randnum = Math.random();
    
    if (randnum < 0.5) {
        outputEl.innerHTML = "<img src='img/heads.png' />";
        numHeads++;
        headsEl.innerHTML = numHeads;
    } else {
        outputEl.innerHTML = "<img src='img/tails.png' />";
        numTails++;
        tailsEl.innerHTML = numTails;
    } {
        document.getElementById("btn").style.background = `rgba(${Math.random() * 255}, ${
          Math.random() * 255
        }, ${Math.random() * 255}, 0.7)`; 
        document.getElementById("random").style.color = `rgba(${Math.random() * 255}, ${
            Math.random() * 255
          }, ${Math.random() * 255}, 0.7)`;
          document.getElementById("p").style.color = `rgba(${Math.random() * 255}, ${
            Math.random() * 255
          }, ${Math.random() * 255}, 0.7)`;
          document.getElementById("p2").style.color = `rgba(${Math.random() * 255}, ${
            Math.random() * 255
          }, ${Math.random() * 255}, 0.7)`;
          document.getElementById("html").style.background = `rgba(${Math.random() * 255}, ${
            Math.random() * 255
          }, ${Math.random() * 255}, 0.7)`;
    }
}