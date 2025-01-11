function clock(){
    var date = new Date();
    console.log(date);
    var dd = date.getDate();
    var mo = date.getMonth();
    var yy = date.getFullYear();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    var dy = date.getDay();
    var imgArr = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"]
    document.body.style.backgroundImage = `url(../../asset/image/${imgArr[dy]})`
    var fullMon = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var fullDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    mo = fullMon[mo];
    dy = fullDay[dy];

    var am_pm = "AM"
    if(hh>=12){
        am_pm = "PM"
        if(hh>12){
            hh -= 12;
        }
    }
    if(hh==0){
        hh=12;
    }
    if(hh<=10){
        hh = `0${hh}`
    }
    if(mm<=10){
        mm = `0${mm}`
    }
    if(ss<10){
        ss = `0${ss}`
    }
    if(dd<10){
        dd = `0${dd}`
    }

    document.getElementById("time").innerHTML = `${hh}:${mm} ${am_pm}`
    document.getElementById("date").innerHTML = `${dd} - ${mm} - ${yy}`
    document.getElementById("day").innerHTML = dy;
    document.getElementById("ss").innerHTML = ss;
}
clock();

setInterval(clock,1000);