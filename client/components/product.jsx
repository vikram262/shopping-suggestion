import { MdOutlineStarPurple500 } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { Bagitems } from "../context/bagcontext";
import { Link } from "react-router-dom";
import Singleproduct from "./singleproduct";
import { Singleitems } from "../context/singleitemcontex";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { Wishlistitems } from "../context/wishlistcontext";
const Product = ({ rating, title, description, price, discountPercentage, img, id }) => {
    const { desc, setdesc } = useContext(Singleitems);
    const { wishlistarr, setwishlist } = useContext(Wishlistitems);
    const [flag, setFlag] = useState(false);
    const [like, setlike] = useState(false);

    const handleOnClick = async () => {
        const update = {
            img: img,
            rating: rating,
            title: title,
            description: description,
            price: price,
            id: id,
            discountPercentage: discountPercentage
        };
        setdesc(update);
    };
    function handlelike() {
        const update = {
            img: img,
            rating: rating,
            title: title,
            description: description,
            price: price,
            id: id,
            discountPercentage: discountPercentage
        };

        if (like) {
            const update = wishlistarr.filter((item) => item.id !== id);
            setwishlist(update);
        }
        else {
            setwishlist(prev => [...prev, update]);
        }
        setlike(prev => !prev)

    }
    return (
        <>
            <div className="home-data">
                <div class="img-like-cont">
                    <div class="more-like">
                        <div onClick={handlelike}>{!like ? <FaRegHeart /> : <FcLike />}</div>
                    </div>
                    <Link to="/aboutproduct" onClick={handleOnClick}><img src={img}
                        className="card-img-top" alt="p1" /></Link>
                </div>
                <div className="card-title">{title}</div>
            </div>
        </>
    );
};

export default Product;