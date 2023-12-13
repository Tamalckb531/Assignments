// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


/*

1 -> get the hours, minutes and seconds first
2 -> make a ternary operator for am and pm on hour basis
3 -> convert hour in 12 hour format
4 -> give extra 0 to hour minute and seconds if they need it like : 01:02:03 (need a a extra fundtion for it which watch the value is bigger then 10 or not. If less then add 0 in first)
5 -> bind all of this in a format function and return statement as the needs
6 -> make a execution function and get the statement from format function by sending them a date instance then call it recursively by the setTimeout and also clear the screen each time.

*/

function dateFormattor (date){
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let AM_PM = hours >= 12 ? 'PM' : 'AM';

  //converting hour is 12 hour format
  hours = hours % 12; //After 12, it will start from 1
  hours = hours ? hours:12; // There is no 0PM , it's 12PM

  hours = zeroFormat(hours);
  minutes = zeroFormat(minutes);
  seconds = zeroFormat(seconds);

  return `${hours}:${minutes}:${seconds} ${AM_PM}`

}

function zeroFormat(val){
  val = val < 10 ? '0'+val : val;
  return val;
}

function updateTime(){
  const date = new Date();
  const formattedTime = dateFormattor(date);

  console.clear() // clear the screen
  console.log(formattedTime);

  setTimeout(updateTime, 1000);
}

updateTime();