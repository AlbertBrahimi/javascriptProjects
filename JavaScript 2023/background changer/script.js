let btn = document.getElementById('btn');
let colors = ['yellow', 'red', 'green', 'blue', 'pink', 'purple', 'orange', 'brown', 'black', 'white'];
let body = document.body;
btn.addEventListener('click',()=> {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];// math floor e kthen numrin e plote me te vogel, ndersa math random kthen numrin e plote me te madh
    body.style.backgroundColor = randomColor;
});