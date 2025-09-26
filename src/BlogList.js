function BlogList(){
    // const [blogs, setBlogs] = useState([
    //     {id: 1, title: "Man Utd Rennaissance", body: "Amorim is not on jokes", author: "Delmar Abubakar"},
    //     {id: 2, title: "City Struggle", body: "Martinelli Saves The Day", author: "Alexander Kisekka"},
    //      {id: 3, title: "Chelsea Stunned", body: "Marresca Fumbles", author: "Kasule Jamal Lukenge"}
    // ]); 

    return(
        <div className="blog-list">
            {blogs.map(blog => (
                <div className="blog-preview">
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                </div>
            )) 
            }
        </div>
    );
}

export default BlogList;