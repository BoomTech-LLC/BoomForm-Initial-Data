export const paymentInitial = {
  paymentSettings: {
    paymentID: "",
    enablePromocode: true,
    fee: 0,
    paymentMethod: {
      cash: false,
      paypal: false,
      stripe: false,
      square: false
    },
    paymentReceipt: {
      name: "",
      email: "example@example.com",
      phone: "",
      address: "",
      enabled: false,
      template: "",
    },
    paymentType: 1,
    shippingFee: 0,
    showTotal: false,
    redirectUrl: "",
    promocodes: [],
    payableFields: {
      ONE_TIME: [],
      SUBSCRIPTION: [],
    },
  },
  promocode: {
    _id: "",
    applyTo: 2,
    code: "",
    discount: "",
    discountType: 1,
    field: [{ field: "", options: [""] }],
    isActive: true,
    limitCount: "",
    limitDate: "",
    limitType: 3,
    payment: "",
  },
};
