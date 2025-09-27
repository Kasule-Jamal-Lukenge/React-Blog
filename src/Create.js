import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [isPending, setIsPending] = useState(false);

    const apiUrl = 'http://localhost:8000/blogs';

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents the page from being reloaded again
        const blog = { title, body, author}
        setIsPending(true);

        fetch(apiUrl, {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
                console.log("New Blog Added");
                setIsPending(false);
        })
    }

    return(
        <div className="create">    
            <h2>Add A New Post</h2>
            <form onSubmit={ handleSubmit }>
                <label>Title:</label>
                <input 
                    type="text" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    required
                />

                <label>Body:</label>
                <textarea
                    onChange={(e) => setBody(e.target.value)}
                    required>

                </textarea>

                <label>Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
            </form>
        </div>
    )
}

export default Create;