import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3 ">
            <h2 className='text-center font-bold my-5 text-2xl'>All Blogs Hare</h2>
            
           {
            blogs.map(blog => <Blog 
                key={blog.id}
                 handleAddToBookmark={handleAddToBookmark}
                 handleMarkAsRead={handleMarkAsRead}
                  blog={blog}></Blog>)
           }
         
            
        </div>
    );
};

Blogs.propTypes ={
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func

}
export default Blogs;