const password = document.getElementById("password");
const image = document.getElementById("image");
password.addEventListener('focus', ()=>{
        image.src="closed.jpg";
       
});
password.addEventListener('blur', () => {
        image.src = "open.png";
   
});