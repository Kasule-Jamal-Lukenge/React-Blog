// npx json-server --watch data/db.json --port 8000

import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    // const apiUrl = 'http://localhost:8000/blogss';

    // const [blogs, setBlogs] = useState(null); 
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     // not practical for a real world application as it forces a user to wait for more time 
    //     setTimeout(()=> {
    //         fetch(apiUrl)
    //             .then(res => {
    //                 if(!res.ok){
    //                     throw Error("Couldn't Fetch The Data");
    //                 }
    //                 return res.json();
    //             })
    //             .then((data) => {
    //                 setBlogs(data);
    //                 setIsPending(false);
    //                 setError(null)
    //                 console.log(data)
    //             })
    //             .catch((error) => {
    //                 setIsPending(false);
    //                 setError(error.message);
    //             })
    //     }, 1000)
    // }, []);

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs"/> }
        </div>
    );
}

export default Home;