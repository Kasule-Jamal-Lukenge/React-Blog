//custom hooks in React have to start with the word use

import { useEffect, useState } from "react";

const useFetch = (apiUrl) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() =>{
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(apiUrl, { signal: abortCont.signal })
                .then((res) => {
                    if(!res.ok){
                        throw Error("Something Went Wrong");
                    } 
                    return res.json();
                })
                .then((responseData) => {
                    setData(responseData);
                    setIsPending(false);
                    setError(null);
                })
                .catch((error) =>{
                    if(error.name === 'AbortError'){
                        console.log('Fetch Aborted');
                    }else{
                        setIsPending(false);
                        setError(error.message);
                    }
                })
        }, 1000);

        return () => abortCont.abort;
    }, [ apiUrl ]);

    return {data, isPending, error};
}

export default useFetch;