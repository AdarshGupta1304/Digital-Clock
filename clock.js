
const formatChanger = (hour) => {
    if(hour > 12)
        hour -= 12;   
    return hour;
}

const DigitalClock = () => {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let AmPm = hour < 12 ? 'AM' : 'PM' ;

    if(minutes === 0 || minutes < 10)
        minutes = '0' + minutes;

    if(seconds === 0 || seconds < 10)
        seconds = '0' + seconds;

    // Optional call only if you want to change the format from 24 hours to 12 hours
    hour = formatChanger(hour); 
    if(hour === 0 || hour < 10)
        hour = '0' + hour;        
    
    document.getElementById('clock')
    .innerHTML = `<h1>${hour} : ${minutes} : ${seconds} ${AmPm}</h1>`;
}

DigitalClock();
setInterval(DigitalClock, 1000);

