/* eslint-disable no-restricted-globals */


self.addEventListener('message',(e)=>{
    let url = e.data.url;

  
      try {
           fetch(url, {
            headers: {
              "Content-Type": "application/json",
            
            },
          }).then(response=>response.json()).then((jsonRepsonse) => {
          if (jsonRepsonse.status === 200) {
              let responseData=jsonRepsonse.data
              self.postMessage({responseData})
          }
        })
        .catch((error) => self.postMessage({error}));
    } catch (error) {
      self.postMessage({error})
    }
  
  
   
})

