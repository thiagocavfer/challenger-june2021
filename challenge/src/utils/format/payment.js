export function getPaymentMethod(method){
  const states = {
      "Credit Card": "Cartão de Crédito",
      "Debit Card": "Cartão de Débito",
      "Cash": "Dinheiro",
   };

   return states[method] || "";
}

export function getBrand(brand){
  const states = {
      "visa": "Visa",
      "master": "Master",
      "cash": "",
   };

   return states[brand] || "";
}