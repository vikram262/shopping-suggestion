import { redirect, useNavigate } from "react-router-dom"
import sc1 from "../src/images/sc1.webp"
import sc2 from "../src/images/sc2.webp"
import sc2b from "../src/images/sc2b.webp"
import sc2c from "../src/images/sc2c.webp"
import sc3 from "../src/images/sc3.webp"
import sc4 from "../src/images/sc4.webp"
import sc5 from "../src/images/sc5.webp"
import { GrNext } from "react-icons/gr";
import { useState } from "react"
import Superexplorer from "./supercoinexplore"
function Supercoin() {
    const [module, setmodule] = useState(false);
    return <>
        <div class={`${module ? "modal-background" : ""}`} >
            <div class={`super-coin-box`}>
                <div class="sc-heading">SuperCoin Balance 0</div>
                <div class="sc1" onClick={() => setmodule(true)}>View coin activity..     <GrNext /></div>
                <div class="sc2" >
                    <div class="sc2a" >stay entertained!</div>
                    <div class="sc2b">Offers on movies, music & more</div>
                    <div class="sc-offer-cont">
                        <div class="sc2c">
                            <div class="sc2ca" style={{ backgroundImage: `URL(${sc1})` }}><div class="sc-explore" onClick={() => setmodule(true)}>Explore more</div></div>

                        </div>
                    </div>
                </div>
                <div class="sc2">
                    <div class="sc2a">For the explorer in you!</div>
                    <div class="sc2b">Travel Offers</div>
                    <div class="sc-offer-cont">
                        <div class="sc2c">
                            <div class="sc2ca" style={{ backgroundImage: `URL(${sc2})` }}><div class="sc-explore" onClick={() => setmodule(true)}>Explore more</div></div>
                        </div>
                        <div class="sc2c">
                            <div class="sc2ca" style={{ backgroundImage: `URL(${sc2b})` }}><div class="sc-explore" onClick={() => setmodule(true)}>Explore more</div></div>
                        </div>
                        <div class="sc2c">
                            <div class="sc2ca" style={{ backgroundImage: `URL(${sc2c})` }}><div class="sc-explore" onClick={() => setmodule(true)}>Explore more</div></div>
                        </div>
                    </div>
                </div>
                <div class="sc2">
                    <div class="sc2a">Extra treats for you!</div>
                    <div class="sc2b">Shopping & lifestyle offers</div>
                    <div class="sc-offer-cont">
                        <div class="sc2c">
                            <div class="sc2ca" style={{ backgroundImage: `URL(${sc3})` }}><button class="sc-explore" onClick={() => setmodule(true)}>Explore more</button></div>
                        </div>
                        <div class="sc2c">
                            <div class="sc2ca" style={{ backgroundImage: `URL(${sc4})` }}><div class="sc-explore" onClick={() => setmodule(true)}>Explore more</div></div>
                        </div>
                        <div class="sc2c">
                            <div class="sc2ca" style={{ backgroundImage: `URL(${sc5})` }}><div class="sc-explore" onClick={() => setmodule(true)}>Explore more</div></div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
        {module == true && <Superexplorer setmodule={setmodule} />}


    </>
}
export default Supercoin;