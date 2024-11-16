import ShippingDetail from "./shippingdetails"
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsJournalCheck } from "react-icons/bs";
import { MdOutlineAccountBalance } from "react-icons/md";
import Confirmorder from "./confirmorder";

function Stepper() {
    const steps = [
        {
            index=0,
            name: <div>ShippingDetail</div>,
            icon: <MdOutlineLocalShipping />
        },
        {
            index=1,
            name: <div>Confirmorder</div>,
            icon: <BsJournalCheck />

        },
        {
            index=2,
            name: <div>Payment</div>,
            icon: <MdOutlineAccountBalance />
        }
    ]

    return <>
        steps.map((item){
            {
                item.index == 0 ? <ShippingDetail name={index.name} icon={index.icon}> </ShippingDetail> :
                    item.index == 1 ? <Confirmorder name={index.name} icon={index.icon}> </Confirmorder> :
                        <ShippingDetail name={index.name} icon={index.icon}> </ShippingDetail>
            }
        })



    </>
}
export default Stepper