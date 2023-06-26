import React from 'react'
import { BsHandbag } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import CartCard from './CartCard'
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeFromCart, decreaseCart } from '../store/cartSlice';
import { toast, ToastContainer } from "react-toastify";
import { BsCartX } from "react-icons/bs"
const Drawer = ({ cartopen, setCartOpen, cart }: any) => {
  console.log(cart, "final")
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveFromCart = (product: any) => {
    dispatch(decreaseCart(product));
  };
  return (
    <div className="">
      <div className='h-[100vh] w-[500px] fixed right-0 top-0  bg-[white] z-50 '>
        <div className='flex items-center justify-between p-7'>
          <div className='flex items-center gap-3'>
            <BsHandbag className="h-5 w-5" />
            <p>Your shopping bag ({cart?.cartItems?.length})</p>
          </div>
          <AiOutlineClose className='h-5 w-5 cursor-pointer' onClick={() => setCartOpen(!cartopen)} />
        </div>
        <hr />
        <div className="p-7 w-full h-[80%] overflow-y-scroll overflow-x-hidden flex flex-col gap-3">
          {cart?.cartItems?.length > 0 ? cart?.cartItems?.map((details: any) => {
            return (
              <div className="">
                <CartCard
                  cartopen={cartopen}
                  setCartOpen={setCartOpen}
                  brand={details?.brand}
                  name={details?.name}
                  price={details?.price}
                  description={details?.description}
                  image={details?.image}
                  allDetails={details}
                  handleAddToCart={handleAddToCart}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              </div>
            )
            // console.log(details,"details")
          }) :
            <div className='flex flex-col items-center justify-center h-full gap-3'>
              <BsCartX className="h-8 w-8" />
              <h1>Cart Is Empty</h1>
            </div>}
          {/* <CartCard cartopen={cartopen} setCartOpen={setCartOpen} /> */}
        </div>
        <hr className='bg-[black]' />
        <div className='flex items-center justify-between w-full px-10 py-10'>
          <p>Subtotal:</p>
          <p>$14.2</p>
        </div>
        <div className="flex flex-col gap-3 w-full px-10 pt-10 pb-5 ">
          <button className='border border-[black] py-3 hover:bg-[black] hover:text-[white]'>View Cart</button>
          <button className='py-3 bg-[black] text-[white]'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Drawer