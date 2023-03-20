
var currentHour = -1;
var prevHour = -1;


function updateTime() {

    var currentTime = new Date(new Date().toLocaleString("sv-SE", { timeZone: "Europe/Stockholm" }));


    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();


    if (hours !== currentHour) {

        prevHour = currentHour;
        currentHour = hours;

        if (currentHour === 21 && prevHour !== 21) {
            document.getElementById("myImage").src = "images/forsenmaxlevel.gif";
        }

        else if (currentHour !== 21 && prevHour === 21) {
            document.getElementById("myImage").src = "images/forsenlevel.png";
        }
    }


    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    var seconds = currentTime.getSeconds();
    seconds = (seconds < 10 ? "0" : "") + seconds;

    document.getElementById("currentTime").innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(updateTime, 1000);