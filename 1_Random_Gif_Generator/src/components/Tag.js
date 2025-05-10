import React , {useState} from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
    const[tag , setTag] = useState("Car");
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
            loading ? (<Spinner></Spinner>) : <img src={gif} alt='Gif is loading' width={400}></img>
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

