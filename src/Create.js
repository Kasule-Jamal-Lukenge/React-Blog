import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('');

    return(
        <div className="create">    
            <h2>Add A New Post</h2>
            <form action="">
                <label>Title:</label>
                <input 
                    type="text" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    required
                />
                <p>{title}</p>
                <textarea
                    onChange={(e) => setBody(e.target.value)}
                    required>

                </textarea>
                <p> {body} </p>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <p>{author}</p>
                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default Create;