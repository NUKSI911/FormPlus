import React ,{useState } from 'react'
import Axios  from 'axios'


const useFetch =  ({url,headerOption}) => {
    const [ data, setData ] = useState([])
    const [ errorMsg,setErrorMsg ] = useState(null)


    const  fetchData = async()=>{
        try {

        await Axios.get(`https://cors-anywhere.herokuapp.com/${url}`,{
            headers:{ 
                'Content-Type': 'application/json',
                ...headerOption}
        }).then(response => {
            if(response.status === 200){
                return setData(response.data)
            } 

            setErrorMsg(response.statusText)

        }

        
     )
    }
    
    catch(e){
        setErrorMsg(e)
    }
    }
  

    return { fetchData , data,errorMsg } 
}


export default useFetch