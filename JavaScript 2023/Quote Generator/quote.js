let quotes = ['“The Way Get Started Is To Quit Talking And Begin Doing.” – Walt Disney', '“The only limit to our realization of tomorrow will be our doubts of today.”- Franklin D. Roosevelt', '“The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney', '"Success is not final, failure is not fatal: It is the courage to continue that counts."', '"It is better to fail in originality than to succeed in imitation."',' "The road to success and the road to failure are almost exactly the same."']; // quotes eshte nje array qe permban disa citate
function generator(){
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];// Math.floor e merr numrin e plote te quotes.length dhe Math.random e merr nje numer random nga 0 deri ne numrin e plote te quotes.length
    document.getElementById('quote').innerHTML = randomQuote;
};
setInterval(generator, 5000);// setInterval e ben qe funksioni generator te ekzekutohet cdo 5 sekonda