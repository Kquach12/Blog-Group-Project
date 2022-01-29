import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';


const BlogList = (props) => {
    const {filter, showUserBlogs} = props
    const [blogs, setBlogs] = useState([]);
    const [filterItem, setFilterItem] = useState(filter);

    useEffect(() => {
        axios.get('http://localhost:8000/api/blogs')
            .then(res => setBlogs(res.data))
    }, [])


//Display list of blogs depending on whether we want to see active user's blogs or all other blogs
    return (
        <div>
            {
                // Show a user's blogs
                showUserBlogs ?
                    blogs.filter(blog => blog.userCreatingId._id == filterItem).map(filteredBlog =>{
                        return(
                            <div>
                                <h3>{filteredBlog.blogPostTitle}</h3>
                                <h6>{filteredBlog.blogPostDescription}</h6>
                            </div>
                        )
                    }
                    )
                :
                //Show all other blogs
                    blogs.filter(blog => blog.blog.userCreatingId._id =! filterItem).map(filteredBlog =>{
                        return(
                            <div>
                                <h3>{filteredBlog.blogPostTitle}</h3>
                                <h6>{filteredBlog.blogPostDescription}</h6>
                            </div>
                        )
                    }
                    )
            }
        </div>
    )
}
export default BlogList;