import { ShippingOptionEnum } from "../../constants/ShippingOption";

const getShippingCost = (weight:number, shippingRate:number, shippingOption:string | undefined)=>{

    let cost = weight * shippingRate *  (shippingOption === ShippingOptionEnum.ground ? 1 : 1.15);
    return cost;
}

export default getShippingCost;