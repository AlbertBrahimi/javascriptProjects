
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
    setInterval(time, 100) // Eshte funksion i integruar ne javascript
