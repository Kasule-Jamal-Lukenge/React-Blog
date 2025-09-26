import { useState } from "react";
import BlogList from "./BlogList";

function Home(){
    exportconst [blogs, setBlogs] = useState([
        {id: 1, title: "Man Utd Rennaissance", body: "Amorim is not on jokes", author: "Delmar Abubakar"},
        {id: 2, title: "City Struggle", body: "Martinelli Saves The Day", author: "Alexander Kisekka"},
         {id: 3, title: "Chelsea Stunned", body: "Marresca Fumbles", author: "Kasule Jamal Lukenge"}
    ]); 
    
    return (
        <div className="home">
            <BlogList/>
        </div>
    );
}

export default Home;