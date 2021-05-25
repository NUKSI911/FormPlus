import React, { useState,useEffect, useMemo } from "react";
import ApiEndPoint from "../config/endPoints";


const useFetch = ({ url, headerOption }) => {
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);


    const templateWorker =useMemo(()=> new Worker('./worker.js'),[]);
    
const fetchData = () =>{

  templateWorker.postMessage({url:`${ApiEndPoint.BASE_URL}/${url}`})
}
  
    
const handleMessage =  (e)=>{
  if(e.data.responseData){
    setData(e.data.responseData)
    templateWorker.terminate()
  }
}
   
const handleError =  (e)=>{
  if(e.message){
    setErrorMsg(e.message)
    templateWorker.terminate()
  }
}

  useEffect(()=>{

  
    templateWorker.onmessage = handleMessage

    templateWorker.onerror = handleError
  
    
  },[templateWorker])

  return { fetchData, data, errorMsg };
}

export default useFetch;
