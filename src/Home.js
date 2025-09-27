import { useEffect, useState } from "react";
import BlogList from "./BlogList";

function Home(){

    const apiUrl = 'http://localhost:8000/blogs';

    const [blogs, setBlogs] = useState(null); 
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        // not practical for a real world application as it forces a user to wait for more time 
        setTimeout(()=> {
            fetch(apiUrl)
                .then(res => {
                    return res.json();
                })
                .then((data) => {
                    setBlogs(data);
                    setIsPending(false);
                    console.log(data)
                })
        }, 1000)
    }, []);

    return (
        <div className="home">
            { isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs"/> }
        </div>
    );
}

export default Home;