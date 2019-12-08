import WizardContextType from "../model/WizardContextType";

const wizardContext:WizardContextType = {
    from: {
        name: "James Anderson",
        street: "20th Avenue , Parker Road",
        city: "Seattle",
        state: "Texas",
        zip: "21022"
    },
    to: {
        name: "",
        street: "",
        city: "",
        state: "",
        zip: ""
    },
    weight: 10,
    shippingOption: 1
}

export const emptyWizardContext:WizardContextType = {
    from: {
        name: "",
        street: "",
        city: "",
        state: "",
        zip: ""
    },
    to: {
        name: "",
        street: "",
        city: "",
        state: "",
        zip: ""
    },
    weight: 0,
    shippingOption: 0
}

export default wizardContext;