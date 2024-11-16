import { CgProfile } from "react-icons/cg";
import { IoIosHappy } from "react-icons/io";
import { FaShoppingBag, FaSuperscript } from "react-icons/fa";
import logo from "../src/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Bagitems } from "../context/bagcontext";
import { Items } from "../context/context";
import "../src/App.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useEffect, useRef, useState } from "react";
import { Reloder } from "../context/reloder";
import { IoMdSearch } from "react-icons/io";
import Transverse from "./transversepage";
import { FaRegHeart } from "react-icons/fa";
const Header = () => {
    const navigate = useNavigate();
    const { users, setUsers } = useContext(Reloder);
    const { bagarr, setbagitems } = useContext(Bagitems);
    const { arr, setcontextitems } = useContext(Items);
    const { shop, setshop } = useContext(Reloder);
    const [localarr, setlocalarr] = useState(arr);
    let [bagqty1, setbagqty1] = useState(0);
    useEffect(() => {
        let bagqty = bagarr.reduce((acc, product) => acc + parseInt(product.qty), 0);
        setbagqty1(bagqty);
    }, [bagarr]);
    const handlesearch = (event) => {
        const search = event.target.value.toLowerCase();
        const update = shop.filter((item) =>
            item.title.toLowerCase().includes(search)
        );
        setcontextitems(update);
        if (search.length === 0) {
            setcontextitems(shop);
        }
    };

    return (
        <>
            <div div class="header-top">
                <div class="header-top-sub">Get upto be 30% off</div>
            </div>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start main-cont">
                    <div>< Link to="/"><img className="logo-img" src={logo} alt="header logo" /></Link></div>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 header-p1">
                        <li><Link to="/" className="nav-link px-2  header-p2" >HOME</Link></li>
                        <li><Link to="/shop" className="nav-link px-2 ">SHOP</Link></li>
                        <li><Link to="menwear" className="nav-link px-2 ">MEN</Link></li>
                        <li><Link to="womenwear" className="nav-link px-2 ">WOMEN</Link></li>
                        <li><Link to="/electronic" className="nav-link px-2 ">ELECTRONIC</Link></li>
                        <li><Link to="/jewelery" className="nav-link px-2 ">JEWELERY</Link></li>
                        <li><Link to="/gifts" className="nav-link px-2 ">GIFTS <sup className="sup">NEW</sup></Link></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 search1" role="search" style={{ position: "relative" }}>
                        <input type="search" className="form-control search-part" placeholder="Search for products.." aria-label="Search" onChange={handlesearch} style={{ paddingRight: "3rem" }} />
                        <div class="search-icon" style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", right: "1rem", cursor: "pointer" }} onClick={handlesearch}>
                            <IoMdSearch style={{ fontSize: "2rem", height: "auto", color: "grey" }} />
                        </div>
                    </form>


                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 header-p1 header-p2">
                        <div className="p1 pn">
                            <CgProfile style={{ marginRight: '5px', fontSize: "1.3rem", color: "" }} />
                            <div className="nav"><Link to="/profile" className="nav-link px-2   ">PROFILE</Link>
                            </div>
                            <div className="dropdown text-end">
                                <a href="#" className="d-block  text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '24px' }}>
                                </a>
                                <ul className="dropdown-menu text-small" style={{}}>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><Link className="dropdown-item" to="supercoin">Super coin zone</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    {users.length == 0 ? <li><Link className="dropdown-item" to="/profile" >Sign in</Link></li> : <li><Link className="dropdown-item" to="/profile" >Sign out</Link></li>}
                                </ul>
                            </div>
                        </div>
                        <div className="p1">
                            <Link to="/wishlist" ><FaRegHeart style={{ fontSize: "1.3rem", color: "" }} /></Link>
                            <div className="nav"><Link to="/wishlist" className="nav-link px-2 nav-bar ">WISHLIST</Link></div>
                        </div>
                        <div className="p2">
                            <div className="position-relative inline">
                                <Link to="/bags" ><AiOutlineShoppingCart style={{ fontSize: "1.3rem", fontWeight: "900" }} /></Link>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger pointer">
                                    {bagqty1}
                                </span>
                            </div>
                            <div className="nav1">
                                <Link to="/bags" className="nav-link px-2 ">BAGS</Link>
                            </div>
                        </div>

                    </ul>
                </div>
            </div >
            <div class="header-bottom"></div>
        </>
    );
}

export default Header;
