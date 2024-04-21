import { useState,useEffect } from "react";


const useFetch = (url) => {
    
const [data, setdata] = useState(null);
const [ispending, setpending] = useState(true);
const [ping, setping] = useState(false);
// if you ever get an error while moving through the pages 
// we use const abortCont = new abortController
// then we associate it to the url in it's parameter of fetch by
// url,{signal: abortCont.signal}
    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((response) => {
              if (response.ok === false) {
                throw Error("Oops could not fetch the data for that resource");
              } else {
                setpending(true)
                return response.json();
              }
            })
            .then((data) => {
              setdata(data);
              setpending(false);
              setping(false);
            })
            .catch((e) => {
              // also here we use the if and else to solve it like
              // if(err.name === 'AbortError') return a code and else{ setispending(false) seterror(err.message)}
              setping(e.message);
              setpending(false);
            });
        }, 1000);
      }, [url]);
      return{data,ping,ispending}
}
export default useFetch;