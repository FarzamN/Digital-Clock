
setInterval(() => {
    a = new Date();
        var time = a.getHours();
        var newhour = Number(time -12);
        if (newhour > 0) {
            var time = newhour;
        }
        document.getElementById(`houres`).innerHTML = time + ":";
        let times = a.getMinutes();
        document.getElementById(`minuts`).innerHTML = times + ":";
        let timez = a.getSeconds();
        document.getElementById(`secound`).innerHTML = timez;
        let timevz = a.getDate()+" / "+ Number(a.getMonth()+ 1)  +  " / " +a.getFullYear();
        document.getElementById(`date`).innerHTML = timevz;
}, 1);
