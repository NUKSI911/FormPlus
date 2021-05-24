/* eslint-disable no-restricted-globals */
import Axios from "axios";
import ApiEndPoint from "../src/config/endPoints";


const fetch = async (url)=>{
  console.log("url",url)
    try {
        await Axios.get(`${ApiEndPoint.BASE_URL}/${url}`, {
          headers: {
            "Content-Type": "application/json",
          
          },
        }).then((response) => {
        if (response.status === 200) {
            let responseData=response.data
            self.postMessage({responseData})
        }
      })
      .catch((error) => self.postMessage({error}));
  } catch (error) {
    self.postMessage({error})
  }
}


self.addEventListener('message',(e)=>{
    let url = e.target.data.url;


   fetch(url)
   
})

