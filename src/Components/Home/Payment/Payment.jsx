import { loadStripe } from "@stripe/stripe-js";
// import SectionTitle from "../Pages/Shared/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
    return (
            <div className="pt-16 ml-2 mr-2 min-h-[calc(100vh-336px)] h-[32vh] lg:ml-20 lg:mr-20">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        
    );
};

export default Payment;