const words = ['kosova', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'orange', 'pear', 'quince', 'shqiperia', 'strawberry', 'tomato', 'bukur']; // Krijimi i nje liste me fjale
let score = 0; // Krijimi i nje variabli per piket
let timer = 20; // Krijimi i nje variabli per kohen
let wordIndex = 0; //   Krijimi i nje variabli per indeksin e fjales
let gameStarted = false; // Vlera false eshte vendosur per te mos filluar loja
let countdown; // Krijimi i nje variabli per kohen e mbetur

const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-button');

function generateRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
} // Krijimi i nje funksioni per te gjeneruar nje fjale te rastesishme 

function displayWord() {
  const randomWord = generateRandomWord();
  wordDisplay.textContent = randomWord;
  wordIndex = words.indexOf(randomWord); // kjo sherben per te gjetur indeksin e fjales i cili na duhet per te krahasuar fjalen e shkruar me ate te gjeneruar
}
function startGame() {
  if (!gameStarted){
    gameStarted = true; // Nese loja nuk eshte filluar, atehere fillon
    userInput.disabled = false; // Nese loja  eshte filluar, atehere input fillon te funksionoje dhe mund te shkruhet
    startButton.disabled = true; // Nese loja eshte filluar, atehere butoni fillon te funksionoje dhe nuk mund te shtypet
    score = 0; // Piket fillimisht jane 0
    timer = 20; 
    scoreDisplay.textContent = 'Score: 0';
    timerDisplay.textContent = 'Time remaining: ' + timer;
    displayWord();// e therret funksionin per te shfaqur fjalen e gjeneruar 
    userInput.focus(); // Kur loja fillon, kursori vendoset ne input
    countdown = setInterval(()=> {
      timer--;
      timerDisplay.textContent = 'Time remaining: ' + timer;
      if (timer === 0) {
        clearInterval(countdown);
        endGame();
      } 
    }, 1000);
  }
}

function endGame() {
  gameStarted = false;
  userInput.disabled = true;
  startButton.disabled = false;
  wordDisplay.textContent = 'Game Over';
  if (score === 0 || score === 1 || score === 2 || score === 3 ) {
    alert("You can be faster than that! You scored " + score + " point.");
} else if(score === 7 || score === 8 || score === 9 || score === 10) {
    alert("Are you a rocket Haha! You scored " + score + " points.");
}  else{
    alert("You scored " + score + " points.");
}
userInput.value = '';
}

function checkWord() {
  if (gameStarted) {
    const userWord = userInput.value.trim().toLowerCase(); // trim() heq hapesirat e teperta dhe toLowerCase() e kthen fjalen ne shkronja te vogla 
    const correctWord = words[wordIndex]; // CorrectWord eshte fjala e gjeneruar nga funksioni generateRandomWord() dhe wordIndex eshte indeksi i fjales se gjeneruar

    if (userWord === correctWord) {
      score++;
      scoreDisplay.textContent = 'Score: ' + score;
      userInput.value = '';
      displayWord();
  
    }
  }
}
userInput.addEventListener('input', checkWord); // input eshte nje event qe ndodh kur perdoruesi shkruan diqka ne input dhe e therret funksionin checkWord 
startButton.addEventListener('click', startGame); // click eshte nje event qe ndodh kur perdoruesi klikon butonin dhe e therret funksionin startGame
