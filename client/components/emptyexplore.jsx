import { RxCross1 } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
function Emptyexplore({ setflag }) {
    return <>
        <div class="super-coin-cont">
            <div class="remove-super-coin" onClick={() => setflag(false)}><RxCross1 /></div>
            <div class="super-coin-sub">sorry we have limited supply we will let you know once it is available... </div>
        </div>
    </>
}
export default Emptyexplore;