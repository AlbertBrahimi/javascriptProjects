    let clock = new Date(); 
    let hour = clock.getHours(); 
    let greeting = document.getElementById("gretting");
    if(hour < 12){ 
        greeting.innerHTML = "Good Morning!"; 
    }else if(hour < 18){ 
        greeting.innerHTML = "Good Afternoon!";
    }else{ 
        greeting.innerHTML = "Good Evening!";
    }

// Funksioni i orës
function time(){
    let clock= new Date();
    let hour = clock.getHours()
    let minute = clock.getMinutes()
    let second = clock.getSeconds()
    if(hour < 10 ){
        hour = "0" + hour;
    };
    if(minute < 10 ){
        minute = "0" + minute;
    };
    
    if(second < 10 ){
        second = "0" + second;
    };
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML =":" + minute;
    document.getElementById("second").innerHTML =":" + second;
}
setInterval(time, 100) // Eshte funksion i integruar ne javascript qe ben qe funksioni time te ekzekutohet cdo 100 milisekonda

//Funksioni i To Do List

function addTask(){
    // Kemi krijuar dy variabla per te marre elementet nga html
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
// kemi vendsuar nje if statement per te kontrolluar nese inputi eshte i zbrazet apo jo
    if(taskInput.value !==""){
        const taskText = taskInput.value; // kemi vendosur nje variabel per te marre vleren e inputit
        const listItem = document.createElement("li");// kemi krijuar nje element li
        listItem.textContent = taskText;// kemi vendosur tekstin e inputit ne elementin li
        const deleteButton = document.createElement("button");// kemi krijuar nje element button
        deleteButton.classList.add("delete-button"); // kemi shtuar nje class ne button
        deleteButton.textContent = "Delete Task";// kemi vendosur tekstin Delete ne button
        deleteButton.addEventListener("click", function(){
            taskList.removeChild(listItem);// kemi vendosur nje event listener per buttonin delete
        });
        listItem.appendChild(deleteButton);// kemi vendosur buttonin delete ne elementin li
        taskList.appendChild(listItem); // kemi vendosur elementin li ne taskList
        taskInput.value = ""; // kemi bere qe inputi te behet i zbrazet pasi te shtohet nje task
    }
}
// Pjesa e Quotes
let quotes = document.getElementById("quotes");
if(hour<12){
    quotes.innerHTML = "“The secret of getting ahead is getting started.” – Mark Twain";
} else if (hour > 12){
    quotes.innerHTML = "“It’s hard to beat a person who never gives up.” – Babe Ruth";
} else if (hour < 18){
    quotes.innerHTML = "“If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz";
}; 