import { Link } from "react-router-dom";

function Cart({ subtotal }) {
    return <>
        <div class="cart-top">
            <div class="cart-body">
                <div class="cart-heading">Card Total</div>
                <div>
                    <div class="part1">
                        <div class="sub-total">Subtotal</div>
                        <div>${Math.round(subtotal)}</div>
                    </div>
                    <div class="part2">
                        <div class="shipping fee">Sheeping Fee</div>
                        <div>Free</div>
                    </div>
                    <div class="part3">
                        <div class="finale-total">Total</div>
                        <div>${Math.round(subtotal)}</div>
                    </div>
                    <div class="checkout-button"><Link to="/shippingdetails">check out</Link></div>
                </div>
            </div>
            <div class="cart-img"></div>
        </div>



    </>
}
export default Cart;