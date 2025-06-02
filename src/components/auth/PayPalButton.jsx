import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function PayPalButton({ amount, onSuccess }) {
    return (
        <PayPalScriptProvider options={{ "client-id": "AXEFWQ2vENn4QCFh3YOIkdtPMSa5mAjORsjDSoHEg-PD3W7wmIuCaOPNcuwb3KggqOAar1ZZkBQ3bb6W", currency: "EUR" }}>
            <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: amount
                            }
                        }]
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then(() => {
                        onSuccess();
                    });
                }}
                onError={(err) => {
                    console.error('Erreur PayPal:', err);
                }}
            />
        </PayPalScriptProvider>
    );
}

export default PayPalButton;
