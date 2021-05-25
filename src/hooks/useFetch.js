import React, { useState,useEffect } from "react";
import ApiEndPoint from "../config/endPoints";


const useFetch = ({ url, headerOption }) => {
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);


    const templateWorker = new Worker('./worker.js');
    
const fetchData = () =>{

  templateWorker.postMessage({url:`${ApiEndPoint.BASE_URL}${url}`})
}
  
    
   

  useEffect(()=>{

    templateWorker.addEventListener('message',async (e)=>{
      if(e.data.responseData){
        setData(e.data.responseData)
        templateWorker.terminate()
      }
    })

    templateWorker.addEventListener('error',async (e)=>{
      if(e.message){
        setErrorMsg(e.message)
        templateWorker.terminate()
      }
    })
  
  },[])
  console.log(data)
  return { fetchData, data, errorMsg };
}

export default useFetch;
