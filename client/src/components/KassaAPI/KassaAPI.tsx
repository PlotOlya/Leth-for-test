import React, { memo } from "react";
import { ICreatePayment, YooCheckout } from '@a2seven/yoo-checkout'; // OR const { YooCheckout } = require('@a2seven/yoo-checkout');

function KassaAPI(): JSX.Element {
    const checkout = new YooCheckout({ shopId: '321392', secretKey: 'test_picgpQiSqVe8h50_dA_oYh-Gej_7H0rlbzYgMMZN16M' });
    const idempotenceKey = '02347fc4-a1f0-49db-807e-f0d67c2ed5a5';

const createPayload: ICreatePayment = {
    amount: {
        value: '2.00',
        currency: 'RUB'
    },
    payment_method_data: {
        type: 'bank_card'
    },
    confirmation: {
        type: 'redirect',
        return_url: 'test'
    }
};

try {
    // const payment = await checkout.createPayment(createPayload, idempotenceKey);
    // console.log(payment)
} catch (error) {
     console.error(error);
}
  return <div>
   txbcbc

  </div>;
}

export default memo (KassaAPI) ;
