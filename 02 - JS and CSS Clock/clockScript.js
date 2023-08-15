function GetDate(){
    let dateSeconds, dateMinutes, dateHours;
    let actualDate = new Date();

    dateSeconds=actualDate.getSeconds();
    dateMinutes=actualDate.getMinutes();
    dateHours=actualDate.getHours();
    
    return [dateHours,dateMinutes,dateSeconds];
}

setInterval(moveClockHands, 1000);

const secondsHand = document.querySelector('.second-hand');
let minutesHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");

function moveClockHands(){
    let dateSeconds, dateMinutes, dateHours;
    [dateHours,dateMinutes,dateSeconds]=GetDate();
    let hoursAngle= dateHours*30 + dateMinutes*0.5;
    let minutesAngle= dateMinutes *6+dateSeconds *0.1;    
    let secondsAngle = dateSeconds*6;
    secondsHand.style.transform = `rotate(${90+secondsAngle}deg)`;
    minutesHand.style.transform = `rotate(${90+minutesAngle}deg)`;
    hourHand.style.transform = `rotate(${90+hoursAngle}deg)`;
    console.log(dateSeconds);


}