const newYears="1 jan 2023";
const dayE=document.getElementById('day');
const hoursE=document.getElementById('hours');
const minsE=document.getElementById('mins');
const secondE=document.getElementById('second');
function countdown(){
    const newYearsData=new Date(newYears);
    const currentDate =new Date();
    const seconds =(newYearsData-currentDate)/1000;
    const day =Math.floor(seconds/3600/24);
    const hours = Math.floor(seconds/3600)%24;
    const minutes = Math.floor(seconds/60)%24;
    const second = Math.floor(seconds)%60;
    dayE.innerHTML=day;
    hoursE.innerHTML=hours;
    minsE.innerHTML=minutes;
    secondE.innerHTML=second;
}
countdown();
setInterval(countdown,1000)