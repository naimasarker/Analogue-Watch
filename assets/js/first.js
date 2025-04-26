setInterval(function updateclock(){
    var d =  new Date();
    var sec = d.getSeconds()/60;
    var min = (d.getMinutes() + sec)/60;
    var hour = (d.getHours() + min)/12;
    var secTime = document.getElementById('sec').style.transform = "rotate(" + (sec * 360) + "deg)";
    var minTime = document.getElementById('min').style.transform = "rotate(" + (min * 360) + "deg)";
    var hourTime = document.getElementById('hour').style.transform ="rotate(" + (hour*360) + "deg)";
}
,1000);