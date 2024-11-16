import w1 from "../src/images/w1.jpg";
import w2 from "../src/images/w2.jpg";
import w3 from "../src/images/w3.jpg";
import w4 from "../src/images/w4.jpg";
import w5 from "../src/images/w5.jpg";
import w6 from "../src/images/w6.jpg";
import w7 from "../src/images/w7.jpg";
import { FaRegSquareCaretLeft } from "react-icons/fa6";
import { FaRegSquareCaretRight } from "react-icons/fa6";
import { useEffect, useState } from "react";

function Offer() {
    const [arr1, setback1] = useState([w1, w2, w3, w4, w5, w6, w7]);
    const [arr, setback] = useState([arr1[0]]);
    const [index, setindex] = useState(0);
    useEffect(() => {
        const intervalid = setInterval(() => {
            setindex(prev => (prev + 1) % arr1.length);
        }, 4000);
        return () => clearInterval(intervalid);
    }, [arr1])

    function handleleftbtn() {
        setindex(prev => (prev === 0 ? prev = arr.length - 1 : prev - 1));
    }

    function handlerightbtn() {
        setindex(prev => (prev + 1) % arr1.length);
    }
    useEffect(() => {
        setback(arr1[index]);
    }, [index, arr1])



    return (
        <div className="offer-cont" style={{ backgroundImage: `URL(${arr})`, marginTop: "2rem" }} >
            <div class="left-btn" onClick={handleleftbtn}><FaRegSquareCaretLeft style={{ fontSize: '2rem' }} />
            </div>
            <div class="right-btn" onClick={handlerightbtn}><FaRegSquareCaretRight style={{ fontSize: '2rem' }} /></div>
        </div>

    );
}

export default Offer;
