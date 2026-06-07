clock= document.querySelector("#clock")

setInterval(() => {
    let date = new Date()
    clock.innerText = date.toLocaleTimeString();
}, 1000);
//setinterval is a function that takes two arguments, a callback function and 
// a time interval in milliseconds.
//  The callback function is executed every time the time interval elapses. 
// In this case, the callback function gets the current date and time, 
// formats it as a locale time string, and updates the inner text of the
//  clock element with the current time.
//  The time interval is set to 1000 milliseconds, which means the clock will update every second.