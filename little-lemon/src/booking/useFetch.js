import { useState, useEffect } from "react";

export default function useFetch() {


  const [data, setData] = useState()

   const fetchData = () => {
    fetch(`https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);
  // Error 404. API
  console.log("data", data)

  // We need data to display, so we will create the manual data below.



  return { data }

}