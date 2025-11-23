import React from "react";
import { Link } from "react-router-dom";

const HotelCard = ({room, index}) => {
    return(
     <Link to={'/rooms/' + romm._id} onClick={() => scrollTo(0,0)} key={room._id}>
        <img src={romm.images[0]} alt="" className="reative max-w-70 w-full rounded-xl overflow-hidden
        bg-white text-gray-500/90 shadow-[0px_4px_4px-rgba(0,0,0,0.5)]"/>
        {index % 2 === 0 &&<p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-meduim rounded-full">
            Best Seller</p>}
        <div className="p-4 pt-5">
            <div className="flex items-center jusitify-between">
                <p className="font-playfair text-hl font-meduim text-gray-800">{room.hotel.name}</p>
                <div className="flex items-center gap-1">
                    <img src={assets.starIconFilled} alt="star-icon" /> 4.5
                </div>
            </div>
        </div>

     </Link>
    )
}


export default HotelCard;