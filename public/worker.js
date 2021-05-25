/* eslint-disable no-restricted-globals */


self.addEventListener('message',(e)=>{
    let url = e.data.url;

    const fetch = async (url)=>{
      try {
          await fetch(url, {
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
  

   fetch(url)
   
})

