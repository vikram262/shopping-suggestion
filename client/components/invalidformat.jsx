import { RxCross1 } from "react-icons/rx";
function Invalidformat({ setmodule }) {
    return <>
        <div class="invalid-top">
            <div class="invalid-top-sub" onClick={() => setmodule(false)}><RxCross1 /></div>
            <div class="invalid-top-sub1">invalid format please try again</div>
        </div>
    </>
}
export default Invalidformat;

