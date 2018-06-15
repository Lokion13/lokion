let time,
    hour,
    minute,
    second;

    function watches() {
        time = new Date();
        hour = time.getHours();
        minute = time.getMinutes();
        second = time.getSeconds();
         if (hour < 10) 
            hour = "0" + hour;
         if (minute < 10) 
            minute  = "0" + minute;
         if (second < 10) 
            second  = "0" + second;
        document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second; 
    }

setInterval(watches, 1000);



