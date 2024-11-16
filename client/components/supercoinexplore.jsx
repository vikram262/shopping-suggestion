import { RxCross1 } from "react-icons/rx";
function Superexplorer({ setmodule }) {
    return <>
        <div class="super-coin-cont">
            <div class="remove-super-coin" onClick={() => setmodule(false)}><RxCross1 /></div>
            <div class="super-coin-sub">Sorry !! you don't have enough coins</div>
        </div>
    </>
}
export default Superexplorer;