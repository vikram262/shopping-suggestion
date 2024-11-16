import { useContext, useEffect, useState } from "react";
import { Reloder } from "../../context/reloder";
import g1 from "../../src/images/gift.jpg";
import g2 from "../../src/images/time.jpg";
function Giftshome() {
    console.log(g1);
    return <>
        <div class="gift-cont" style={{ backgroundImage: `URL(${g1})` }} >
            <div>
                <div class="g-card">
                    <div class="card g-sub-card" style={{ width: "13rem", height: "19rem" }}>
                        <img src="../../src/images/babygift.jpg" class="card-img-top g-card-img" alt="..." />
                        <div class="card-body card-gift-body">
                            <h5 class="card-title">Baby Toys</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card g-sub-card" style={{ width: "13rem", height: "19rem" }}>
                        <img src="../../src/images/merriage.webp" class="card-img-top g-card-img" alt="..." />
                        <div class="card-body card-gift-body">
                            <h5 class="card-title">Gift for couples</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card g-sub-card" style={{ width: "13rem", height: "19rem" }}>
                        <img src="../../src/images/birthday.jpg" class="card-img-top g-card-img" alt="..." />
                        <div class="card-body card-gift-body">
                            <h5 class="card-title">birthday gifts</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="new-avail">
                    <div class="new-gift-heading">Get ready for some new amazing gifts..</div>
                    <div class="days-left" style={{ backgroundImage: `URL(${g2})`, opacity: "1" }}>19 days left</div>
                </div>
            </div>
        </div>
    </>
}
export default Giftshome;