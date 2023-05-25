import React, { memo } from "react";

function YooKassa({
  certificate,
}: {
  certificate: number | undefined;
}): JSX.Element {
  console.log("kassa = ", certificate);

  return (
    <div className="kassa-container">
      <link
        rel="stylesheet"
        // href="https://yookassa.ru/integration/simplepay/css/yookassa_construct_form.css"
      />
      <form
        className="yoomoney-payment-form"
        action="https://yookassa.ru/integration/simplepay/payment"
        method="post"
        acceptCharset="utf-8"
      >
        <button type="submit" className="design_button">
          <span className="ym-text-crop">Подтвердить оплату</span>
          <span className="ym-price-output" />
        </button>
        <input
          name="sum"
          placeholder="0.00"
          className="ym-input ym-sum-input ym-required-input"
          type="number"
          step="any"
          style={{ color: "black", opacity: 0 }}
          defaultValue={certificate}
        />

        <input name="shopId" type="hidden" value="321392" />
      </form>
      <script src="https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js" />
    </div>
  );
}

export default memo(YooKassa);
