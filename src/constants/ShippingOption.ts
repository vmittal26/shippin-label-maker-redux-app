const ShippingOption:any = {
    ground: 1,
    priority: 2
}

export enum ShippingOptionEnum {
    ground="ground",
    priority="priority"
}

export const ShippingOptionMap = (function(){

    let shippinOptionMap:any = null;

    return {

        getShippingOptionMap:function():Map<number,string>{
            if(!shippinOptionMap){
                shippinOptionMap = new Map();
                Object.keys(ShippingOption).forEach((key)=>{
                    shippinOptionMap.set(ShippingOption[key],key);
                })
               return shippinOptionMap;
            }else{
                return shippinOptionMap;
            }
        }
    }
})();

export default ShippingOption;