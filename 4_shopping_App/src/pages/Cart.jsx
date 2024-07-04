import React, { useState ,  useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from "../components/CartItem"

const Cart = () => {
    const {cart} = useSelector((state) => state) ;
    const[totalAmount , setTotalAmount] = useState(0);

    useEffect( () =>{
        setTotalAmount(cart.reduce((acc,curr) => acc + curr.price , 0));
    },[cart]) 

  return(
    <div className='w-full max-w-6xl mx-auto'>
    {
        cart.length > 0 ?
        (<div className='w-full max-w-6xl sm:flex justify-evenly'>
            <div className='sm:w-[60%]'>
                {
                    cart.map( (item , index) =>{
                        return <CartItem key={item.id} item = {item} itemIndex = {index}></CartItem>
                    })
                }
            </div>

            {/* Right vale div... */}
            <div className='flex flex-col w-full sm:items-center sm:justify-between sm:w-[40%] mb-5 mt-10 ml-2 sm:ml-[5rem] '>
                <div>
                    <div className='uppercase font-semibold'>Your Cart</div>
                    <div className='uppercase font-semibold text-green-600 text-3xl'>Summary</div>
                    <p>
                        <span className='font-semibold'>Total Items : {cart.length}</span>
                    </p>
                </div>

                <div className='flex flex-col gap-2'>
                    <p >Total Amount: <span className='font-semibold'>${totalAmount.toFixed(2)}</span></p>
                    <button className='bg-green-600 flex items-center justify-center rounded-md font-semibold w-[50%] sm:w-full h-[2.5rem] text-white'> Checkout Now </button>
                </div>
            </div>

        </div>) :

        (<div className='h-screen flex flex-col items-center justify-center'>
            <h1 className='font-semibold'>Cart Empty !!</h1>
            <Link to={'/'}>
            <button className='bg-green-600 flex items-center justify-center rounded-md font-semibold w-[10rem] h-[3rem]'>Shop Now</button>
            </Link>
        </div>)
    }
    </div> 
  )
}

export default Cart