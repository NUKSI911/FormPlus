/* eslint-disable no-restricted-globals */

const fetch = async (url)=>{
  // console.log("url",url)
    try {
         fetch(`${ "https://gophie-cors.herokuapp.com"}/${url}`).then((response)=>response.json()).then((response) => {
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

