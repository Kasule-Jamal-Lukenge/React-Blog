//custom hooks in React have to start with the word use

import { useEffect, useState } from "react";

const useFetch = (apiUrl) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() =>{
        setTimeout(() => {
            fetch(apiUrl)
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
                    setIsPending(false);
                    setError(error);
                })
        }, 1000);
    }, [ apiUrl ]);

    return {data, isPending, error};
}

export default useFetch;