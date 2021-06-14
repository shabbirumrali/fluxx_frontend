// useFetch.js
import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch(url,{
    	"method": "GET",
    	"headers": {
         'Authorization': `Bearer ${localStorage.getItem('token')}`,
         'Content-Type': 'application/json', 
      }
  });
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return data;
}


