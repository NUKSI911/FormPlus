import React, { useState,memo } from "react";


const useFetch = ({ url, headerOption }) => {
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchData = async () => {

    const templateWorker = new Worker("./worker.js");
    templateWorker.postMessage({url})
    
    templateWorker.addEventListener('message',(e)=>{
      if(e.data.responseData){
        setData(e.data.responseData)
        templateWorker.terminate()
      }
    })

    templateWorker.addEventListener('error',(e)=>{
      if(e.message){
        setErrorMsg(e.message)
        templateWorker.terminate()
      }
    })
  };

  console.log(data)
  return { fetchData, data, errorMsg };
}

export default useFetch;
