// I need API for final exercises.

// import React, {useState} from "react";
// for that example I ignore date to do simple
/* 
const availableTimes = [
    "13:00",
    "13:30",
    //  "14:00",
    "14:30",
    "15:00",
    //  "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    //  "18:30",
    "19:00",
    "19:30",
    "20:00",
    //  "20:30",
    "21:00",
    "21:30",
  ];
 */
/*   const [formData, setFormData] = useState({
    // Initialize your form fields here
    name: "",
    guests: "1",
    date: "",
    time: availableTimes[0],
    occasion: "birthday",
  }); */

function chekDate(){

  const date = new Date()
  let day = date.getDate();
  let mouth = date.getMonth() + 1;
  let year = date.getFullYear()


  let dateAvaible = year.toString() + "-" + mouth.toString() + "-" + day.toString()


  const timeToBook = date.getHours() + 2
  let timeAvaible = timeToBook.toString() + ":00"
  console.log(timeAvaible)

  return {date: dateAvaible, time: timeAvaible}

  

}


export default chekDate



 

  //export default availableTimes