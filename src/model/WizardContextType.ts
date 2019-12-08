import AddressType from "./AddressType";

type WizardContextType={
    from:AddressType,
    to:AddressType,
    weight?: number,
    shippingOption?: number
}

export default WizardContextType;