function chekDate() {
  const date = new Date();
  
  const year = date.getFullYear();

  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const dateAvailable = `${year}-${month}-${day}`;


  let hoursToBook = date.getHours() + 2;
  if (hoursToBook >= 24) hoursToBook = hoursToBook - 24;
  
  const timeAvailable = `${hoursToBook.toString().padStart(2, '0')}:00`;

  console.log("Fecha sugerida:", dateAvailable);
  console.log("Hora sugerida:", timeAvailable);

  return { date: dateAvailable, time: timeAvailable };
}

export default chekDate;