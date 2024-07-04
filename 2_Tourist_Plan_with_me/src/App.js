import React from "react";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner" ;
import {filterData , apiUrl} from "./data";
import {useEffect} from "react";
import {useState} from "react";
import {toast} from "react";
import Cards from "./components/Cards";
// import Card from "./components/Card";

const App = () => {

  const[courses , setCourses] = useState(null);
  // We can use [] here instead of null..if we don't use loading...
  const[loading , setLoading] = useState(true);
  const[category , setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output.data);
      // console.log(output); 
      }
      catch(error)
      {
        toast.error("Something went wrong");
      }
      setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  


  return(
    <div className="h-[100vh] flex flex-col bg-bgDark2">
      <div>
      <Navbar></Navbar>
      </div>
       
      <div className="bg-bgDark2">
        <div>
        <Filter filterData = {filterData} category = {category} setCategory = {setCategory}/>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)
          }
        </div>
      </div>
    </div>
  )
};

export default App;
