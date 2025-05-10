 import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Blogs from "./components/Blogs";
import Home from "./pages/Home"
import TagPage from "./pages/TagPage" 
import CategoryPage from "./pages/CategoryPage"

import {Route , Routes} from "react-router-dom"
import {useSearchParams , useLocation} from "react-router-dom"
export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const[searchParams , setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    // by default 1...
    const page = searchParams.get("page") ?? 1 ;
    if(location.pathname.includes("tag"))
    {
      // slash ke baad ki jo last entity hoti h...
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories"))
    {
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      // null is passed because no tag is here...
      fetchBlogPosts(Number(page) , null , category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname , location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}> </Route>
      <Route path="/blog/:blogId" element={<Blogs></Blogs>}> </Route>
      <Route path="/tags/:tag" element={<TagPage></TagPage>}> </Route>
      <Route path="/categories/:category" element={<CategoryPage></CategoryPage>}> </Route>
      
        

     
    </Routes>
  );
}
