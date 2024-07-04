
import {AiTwotoneDelete} from "react-icons/ai"
import React from 'react'
import { useDispatch } from "react-redux"
import {remove} from "../redux/slices/CartSlice";
import {toast} from "react-hot-toast"

const CartItem = ({item , itemIndex}) => {
    const dispatch = useDispatch();
    const removeFromCart = () =>{
        dispatch(remove(item.id));
        toast.error("Item removed");
    }
  return (
    <div className="ml-2">
        {
            itemIndex===0?(<div></div>):(<div className="border-b-[1px] border-black"></div>)
        }

        <div className="flex w-[100%] mb-5">

            <div className="w-[30%] flex items-center justify-center mr-2">
                <img src={item.image} className="w-full aspect-square"></img>
            </div>

            <div className="flex flex-col w-[70%] p-5 mb-[50px]">
            
                <div className="mb-2">
                    <h1 className="font-bold mb-1">{item.title}</h1>
                    <p className=" text-xs opacity-70">{item.description}</p>
                </div>

                <div className="flex justify-between">
                    <p className='text-green-600 font-semibold flex items-center justify-center'>${item.price}</p>
                    <div 
                    className="bg-red-300 flex items-center justify-center rounded-full w-[2.5rem] h-[2.5rem]"
                    onClick={removeFromCart}>
                        <AiTwotoneDelete></AiTwotoneDelete>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CartItem