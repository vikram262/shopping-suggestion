import { Link } from "react-router-dom";
import c1 from "../src/images/24.webp"
import c2 from "../src/images/freeshipping.jpg"
import c3 from "../src/images/onlineorder.webp"
import c4 from "../src/images/promotion.webp"
import c5 from "../src/images/saveimage.jpg"
import c6 from "../src/images/happy sell.avif"
import c7 from "../src/images/c6.avif"
import c8 from "../src/images/c6a.jpg"
import { Bagitems } from "../context/bagcontext";
import { useContext, useEffect } from "react";
function Home() {
    const { bagarr, setbagitems } = useContext(Bagitems);


    return <>
        <div class="main-home">
            <div class="home-store">
                <div class="home1">new arrivals only</div>
                <div class="home2" >new</div>
                <div class="home3">collections</div>
                <div class="home4">for everyone</div>
                <div class="home5">Save more with coupons & up to</div>
                <div class="home6">70% off! </div>
                <Link to="/contact" style={{ textDecoration: "none" }}><div class="contact">contact us</div></Link>
            </div>
            <div class="container1">
                <div class="bx">
                    <div class="box1">
                        <img src={c1} class="ship" alt="home" />
                        <button class="btn1">Free Shipping</button>
                    </div>
                    <div class="box2">
                        <img src={c3} class="online" />
                        <button class="btn2">online order</button>
                    </div>
                    <div class="box3">
                        <img src={c5} class="save" />
                        <button class="btn3">Save money</button>
                    </div>
                    <div class="box4">
                        <img src={c4} class="promotion" />
                        <button class="btn4">promotion</button>
                    </div>
                    <div class="box5">
                        <img src={c6} class="happy" />
                        <button class="btn5">happy shopping</button>
                    </div>
                    <div class="box6">
                        <img src={c1} class="four" />
                        <button class="btn6">24/7 service</button>
                    </div>
                </div>
            </div>
            <div class="container5">
                <div class="c5small">
                    <div class="cn1" style={{ backgroundImage: `URL(${c7})` }}>
                        <div class="c5t1">
                            <div class="c5a">crazy deals</div>
                            <div class="c5b">buy 1 get 1 free</div>
                            <div class="c5c">the best classic deal is at cora</div>
                            <div><button class="c56">learn more</button></div>
                        </div>
                    </div>
                    <div class="cn1 cn2" style={{ backgroundImage: `URL(${c8})` }}>
                        <div class="c5t1 c5t2">
                            <div class="c5a">spring/summer</div>
                            <div class="c5b">buy 1 get 1 free</div>
                            <div class="c5c">the best classic deal is at cora</div>
                            <div><button class="c56">collection</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Home;