import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
    const {gif , loading , fetchData} = useGif() ;
    function clickHandler()
    {
      fetchData();
    }

  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>
        {
            loading ? (<Spinner></Spinner>) : <img src={gif} alt='Gif loading' width={400} ></img>
        }
        
        <button onClick={clickHandler} className='w-9/12 bg-white text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Random