/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("")
    const [clientSecret, setClientSecret] = useState('')
    const axiosPublic = useAxios()
    const { user } = useAuth()
    const [transactionId, setTransactionId] = useState('')
    const [price,setPrice]=useState(200)
    // const price = 200;

    useEffect(() => {
        // axiosPublic.post('http://localhost:5000/create-payment-intent', { price: price })
        axiosPublic.post('/create-payment-intent', { price: price })
            .then(res => {
                // console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosPublic, price])

    // console.log(clientSecret)


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('payment error', error)
            setError(error.message)
        }
        else {
            // console.log('payment method', paymentMethod)
            setError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonympus',
                    name: user?.displayName || 'anonympus'
                }
            }
        })

        if (confirmError) {
            // console.log('confirm error')
            toast.error("Error");
        }
        else {
            // console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                // console.log('transaction id', paymentIntent.id)
                setTransactionId(paymentIntent.id)
                // now save the payment in the database

                const payment = {
                    email: user.email,
                    image:user.photoURL,
                    name:user.displayName,
                    price: price,
                    transactionId: paymentIntent.id,
                    date: new Date(),  //utc date convert. use moment js to convert
                    // status: 'pending'
                }
                // axiosPublic.post('http://localhost:5000/payments', payment)
                axiosPublic.post('/payments', payment)
                // axiosPublic.post('/payments', payment)
                    .then(res => {
                        // console.log('payment saved', res.data)
                        if (res.data?.paymentResult?.insertedId) {
                            // refetch()
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Thank you for the payment",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm btn-success mt-4" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
                {
                    transactionId && <p className="text-green-600">Your transaction id: {transactionId}</p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;

