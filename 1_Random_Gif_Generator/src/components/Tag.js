import React , {useState} from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY ;
// console.log(API_KEY); 

const API_KEY = 'MAqDlgPYjByKCJpXiqXv4FVmFAtgKaGG' ;

const Tag = () => {
    // const[gif , setGif] = useState("");
    // const[loading , setLoading] = useState(false);
    const[tag , setTag] = useState("Car");

    // async function fetchData()
    // {
    //     setLoading(true); 
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url) ;
    //     // console.log(output);
    //     // Path is : data data images downsize url
    //     const imageSource = data.data.images.downsized_large.url ;
    //     // console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false);    
    // }

    // useEffect( () => {
    //     fetchData();
    // }, [])

    const {gif , loading , fetchData} = useGif(tag) ;

    function clickHandler()
    {
        fetchData(tag);
    }

    function changeHandler(event)
    {
        setTag(event.target.value);
    }

  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random {tag} Gif</h1>
        {
            loading ? (<Spinner></Spinner>) : <img src={gif} width={400}></img>
        }

        <input type='text'
            value={tag}
            onChange={changeHandler}
            className='w-9/12 bg-white text-lg py-2 rounded-lg mb-[3px] text-center'
        ></input>
        
        <button onClick={clickHandler} className='w-9/12 bg-white text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Tag

