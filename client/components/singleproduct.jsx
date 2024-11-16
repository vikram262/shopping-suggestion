
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Singleitems } from "../context/singleitemcontex";
import { useContext, useRef, useState } from "react";
import { Bagitems } from "../context/bagcontext";
function Singleproduct() {
    const { bagarr, setbagitems } = useContext(Bagitems);
    const { desc, setdesc } = useContext(Singleitems);
    const storeqty = useRef();
    const [flag, setflag] = useState(false);
    const [color, setcolor] = useState(false);
    const handleOnClick = async () => {
        let qty = parseInt(storeqty.current.value, 10);
        const isItemFound = bagarr.some(item => item.id === desc.id);
        if (qty > 0 && !isItemFound) {
            const update = {
                img: desc.img,
                rating: desc.rating,
                title: desc.title,
                description: desc.description,
                price: desc.price,
                id: desc.id,
                discountPercentage: desc.discountPercentage,
                qty: parseInt(storeqty.current.value, 10)
            };
            setbagitems([...bagarr, update]);
            setcolor(true);
        }


    };
    console.log("desc", desc);
    return <>
        <div class="single-p">
            <img src={desc.img} className="single-p-img" alt="p1" />
            <div class="single-p1">
                <h5 className="card-title card-title-single-p">{desc.title}</h5>
                <div className="pricing">
                    <div className="actual">$ {desc.price} </div>
                    <div className="actual cut-price">$ {Math.round((30 / 100) * parseInt(desc.price) + desc.price)} </div>
                    <div className="discount">({30}% OFF)</div>
                </div>
                <select name="select size" id="size">
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                </select>

                <div class="selector">
                    <input class="single-p-inp" type="text" placeholder="Qty" ref={storeqty}></input>
                    <button href="#" className={`btn btn-primary ${!color ? "bag-btn" : "added-btn"} `} onClick={handleOnClick}>
                        {!color ? "Add to Bag" : "Added to bag"}
                    </button>
                </div>
                <h4 className="card-title">Product Details</h4>
                <p className="card-text t1">{desc.description}</p>

            </div>
        </div>
    </>

}

export default Singleproduct;
