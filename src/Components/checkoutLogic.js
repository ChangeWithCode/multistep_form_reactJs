// checkoutLogic.js

export const isStep1Valid = (formDatas) => {
    return (
      formDatas &&
      formDatas.firstName !== undefined &&
      formDatas.lastName !== undefined &&
      formDatas.address !== undefined &&
      formDatas.firstName.trim() !== "" &&
      formDatas.lastName.trim() !== "" &&
      formDatas.address.trim() !== ""
    );
  };
  
  export const isStep2CreditCardValid = (formDatas) => {
    return (
      formDatas &&
      formDatas.paymentMethod === "creditCard" &&
      formDatas.cardNumber !== "" &&
      formDatas.expirationDate !== "" &&
      formDatas.cardNumber.trim() !== "" &&
      formDatas.expirationDate.trim() !== ""
    );
  };
  
  export const isStep2PaypalValid = (formDatas) => {
    return formDatas && formDatas.paymentMethod === "paypal";
  };
  