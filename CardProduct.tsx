import React from 'react'
import Image from 'next/image';
import FormattedPrice from "./FormattedPrice";
import { IoMdClose } from "react-icons/io";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { decreaseQuandity, increaseQuandity, deleteProduct } from '@/store/nextSlice';

interface Item{
    brand: string;
    category: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    title: string;
    _id: number;
    quandity: number;
}
interface cartProductsProps{
    item:Item
}

const CardProduct = ({item}:cartProductsProps) => {
    const dispatch = useDispatch();
  return (
    <div className='bg-gray-100 rounded-lg flex items-center gap-4'>
        <Image
        className="object-cover"
        width={150}
        height={150}
        src={item.image}
        alt="productImage"
      />
      <div className='flex items-center px-2 gap-4'>
        <div className='flex flex-col gap-1'>
            <p className='text-lg font-semibold text-amazon_blue'>{item.title}</p>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-sm text-gray-600">
            Unit Price{" "}
            <span className="font-semibold text-amazon_blue">
              <FormattedPrice amount={item.price} />
            </span>
          </p>

          <div className='flex items-center gap-4'>
            <div className="flex items-center mt-2 justify-between border border-gray-300 px-1 py-1 rounded-full w- shadow-lg shadow-gray-300">
              <span
                onClick={() =>
                  dispatch(
                    increaseQuandity({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      description: item.description,
                      image: item.image,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quandity: 1,
                    })
                  )
                }
                className="w-7 h-7 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
              >
                   <LuPlus />
              </span>
              <span>{item.quandity}</span>
              <span
                onClick={() =>
                  dispatch(
                    decreaseQuandity({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      description: item.description,
                      image: item.image,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quandity: 1,
                    })
                  )
                }
                className="w-7 h-7 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300">
                <LuMinus />
              </span>
              <div
              onClick={() => dispatch(deleteProduct(item._id))}
              className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300" >
              <IoMdClose className="mt-[1px]" /> <p>remove</p>
            </div>
          </div>
        </div>
        <div className="text-lg font-semibold text-amazon_blue p-2 px-10">
          <FormattedPrice amount={item.price * item.quandity} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardProduct;