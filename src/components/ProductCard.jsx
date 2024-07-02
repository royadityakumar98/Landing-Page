import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { LuIndianRupee } from "react-icons/lu";

const ProductCard = ({imgurl,title,disprice,orgprice}) => {
  return (
    
    <div className=" w-80 border border-gray-400 text-center rounded-2xl p-4 m-4">
      <img src={imgurl} alt="" className="w-72 rounded-xl" />
      <h1 className="uppercase text-xl font-semibold py-2">{title}</h1>
      <p className="text-xs text-gray-600">Level your typing experiance, Find your perfect keyboard,this is dynamic and wireless.</p>

      <div className="flex justify-center items-center my-4">
        <FaStar className="text-orange-600" />
        <FaStar className="text-orange-600" />
        <FaStar className="text-orange-600" />
        <FaStar className="text-orange-600" />
        <FaStarHalfStroke className="text-orange-600" />
      </div>
        <p className="flex items-center justify-center text-xl">Discounted Price :- <LuIndianRupee />{disprice}</p>
        <p className="flex items-center justify-center text-sm text-gray-500">Original Price :- <LuIndianRupee /><span className="line-through">{orgprice}</span></p>
      <div className="flex justify-between items-center my-4">
        <button className="bg-[#fed814] p-2 rounded-xl">Add to Cart</button>
        <button className="bg-[#ffa41c] p-2 rounded-xl">Buy Now</button>
      </div>
      


    </div>
  )
}

export default ProductCard