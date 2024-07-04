import React from 'react'
import {  useLocation, useNavigate} from 'react-router-dom'
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);

  return (
    <div>
        <Header></Header>
        <div>
            <button onClick={() => NavigationPreloadManager(-1)}>Back</button>
        </div>
        <h2>
            Blogs Tagged <span>#{tag}</span>
        </h2>
        <Blogs></Blogs>
        <Pagination></Pagination>
    </div>
  )
}

export default TagPage