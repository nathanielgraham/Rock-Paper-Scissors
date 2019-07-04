const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreboard = {
  player: 0,
  computer: 0
}

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
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice); 
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

function showWinner(winner, computerChoice) {
  if(winner === 'player') {
    scoreboard.player++;
    result.innerHTML = `
      <h1 class="text-win">You Win</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"</i>
      <p>Computer chose <strong>${computerChoice}</strong></p>
    `;
  } else if(winner === 'computer') {
    scoreboard.computer++;
    result.innerHTML = `
      <h1 class="text-lose">Computer Wins</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"</i>
      <p>Computer chose <strong>${computerChoice}</strong></p>      
    `;
  } else {  
    result.innerHTML = `
      <h1>Draw!</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"</i>
      <p>Computer chose <strong>${computerChoice}</strong></p>
    `;
  }
  // show score
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
  `;
  modal.style.display = 'block';
}

// clear Modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// Event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);     
