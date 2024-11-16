import { useContext, useEffect } from "react";
import Wishlistadd from "./wishlistadd";
import { Wishlistitems } from "../context/wishlistcontext";
import Emptywishlist from "./emptywislist";
function Wishlist() {
    const { wishlistarr } = useContext(Wishlistitems);
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlistarr));
    }, [wishlistarr]);
    return <>
        {wishlistarr.length === 0 ? <Emptywishlist></Emptywishlist> :
            <div class="product-mapping" style={{ marginTop: "2rem" }}>
                <div class="bag-heading ">
                    <div class="head1">products</div>
                    <div class="head">Title</div>
                    <div class="head">Price</div>
                </div>
                <div class="bag-adding">
                    {wishlistarr.map((product) => (
                        <Wishlistadd rating={product.rating}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            img={product.img}
                            id={product.id}
                        />
                    ))}
                </div >
            </div >}
    </>
}
export default Wishlist; 