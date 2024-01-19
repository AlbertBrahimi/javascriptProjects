//Fillimisht deklarojme disa varibala te cilat ruajne vlerat  e ores.
let seconds = 0;
let minutes= 0;
let hours = 0;
// Kemi deklaruar disa varibla qe na mundesojne qe te numrat njeshifror t'ju japim shifer
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
// Tani krijojme funksionin i cili sa here qe ekzekutohet bene qe vlerat te ndryshojne
function stopWatch(){
    seconds++; // Sa here qe thirret funksioini sekondat do te rriten
    // Pjesa ku i tregohet programit se si te veproje kur arrihen vlerat e caktuara
    if(seconds/60===1){
        seconds = 0;
        minutes++;
     if(minutes / 60===1){
        minutes=0;
        hours++;
    }
  }
  // Pjesa e kodit ku u shtohet shifer numrave njeshifror
  if(seconds<10){
    displaySeconds= "0"+ seconds.toString();
  } else{
    displaySeconds=seconds;
  }
  if(minutes<10){
    displayMinutes= "0"+ minutes.toString();
  } else{
    displayMinutes=minutes;
  }
  if(hours<10){
    displayHours= "0"+ hours.toString();
  } else{
    displayHours=hours;
  }
  // Pjesa e kodit ku i mundesojme ores te levize
  document.getElementById("display").innerHTML= displayHours +":" + displayMinutes +":" + displaySeconds;
}
// Krijojme nje variabel qe ruan vleren e SETINTERVAL().
let interval = null;
// Deklarojme edhe nje variabel qe ruan statusin e ores
let stat= "stopped";
// Funksioni qe munndeson te kontrollojme oren
function stopStart(){
  if(stat ==="stopped"){
    interval= window.setInterval(stopWatch, 1000); // Funksioni i cili mundeson qe funksioni i krijuar te thirret ne kohe te caktuar
    document.getElementById("startStop").innerHTML = "Stop";
    stat="started";
  } else{
    window.clearInterval(interval); 
    document.getElementById("startStop").innerHTML = "Start";
    stat="stopped";
  }
}
// Funksioni i  cili bene Reset oren
function reset(){
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("startStop").innerHTML="Start";
  
}