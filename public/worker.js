/* eslint-disable no-restricted-globals */


self.addEventListener('message',(e)=>{
    let url = e.data.url;

  
      try {
           fetch(url, {
            headers: {
              "Content-Type": "application/json",
            
            },
          }).then(response=>response.json()).then((jsonResponse) => {
            console.log(jsonResponse)
          if (jsonResponse.ok) {
              let responseData=jsonResponse.data
              self.postMessage({responseData})
          }
        })
        .catch((error) => self.postMessage({error}));
    } catch (error) {
      self.postMessage({error})
    }
  
  
   
})

