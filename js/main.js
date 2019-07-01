const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

// get computers choice
function getComputerChoice() {
  const rand = Math.random();
  return rand < .34 ? 'rock' : rand < .67 ? 'paper' : 'scissors'; 
}

// play game
function play(e) {
  restart.style.display = 'none';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  console.log(playerChoice, computerChoice);
  const winner = getWinner(playerChoice, computerChoice);
  console.log(winner);

}


// get winner
function getWinner(p, c) {
  return p === c ? 'draw' 
  : (p === 'rock' && c === 'paper') ? 'computer' 
       : (p === 'rock' && c === 'scissors') ? 'player' 
       : (p === 'paper' && c === 'rock') ? 'player' 
       : (p === 'paper' && c === 'scissors') ? 'computer' 
       : (p === 'scissors' && c === 'paper') ? 'player' 
       : 'computer';
      }

      choices.forEach(choice => choice.addEventListener('click', play));
      
