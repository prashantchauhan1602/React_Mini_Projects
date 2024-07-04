import React, { useEffect } from 'react'
import { useState , useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {
    const[blog , setBlog] = useState(null);
    const[relatedBlogs , setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const{setLoading , loading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/" ;

    async function fetchRelatedBlog()
    {
        setLoading(true);
        let url = `{newBaseUrl}get-blog?blogId=${blogId}` ;
        try{
            const res = await fetch(url);
            const data = await res.json();
            // data is not found in API
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error)
        {
            console.log("Error found !!");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }
    useEffect( () =>{
        if(blogId)
        {
            fetchRelatedBlog();
        }
    } , [location.pathname]);
  return (
    <div>
        <Header></Header>
        <div>
            <button onClick={()=> navigation(-1)}>Back</button>
        </div>
        {
            loading ? <p>Loading</p> : blog ? (
                <div>
                    {/* single blog dikaya jara h... */}
                    <BlogDetails post={blog}></BlogDetails>
                    <h2>Related Blogs</h2>
                    {/*iske baad related blogs dikhaye jayenge in related blog page..  */}
                    {
                        relatedBlogs.map( (post) =>{
                            <div key={post.id}>
                                <BlogDetails post={post}> </BlogDetails>
                            </div>
                        })
                    }
                </div>
            ) : 
            (<div>
                No Blog Found !! 
            </div>)  
        }
    </div>
  )
}

export default BlogPage