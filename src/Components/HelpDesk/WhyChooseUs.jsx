import React from 'react';
import expence from "../../assets/WhyChooseUs/expense-1658113-1407314.webp"
import Security from "../../assets/WhyChooseUs/secure-icon-png-4986.png"
import debt  from "../../assets/WhyChooseUs/4334503.png"

const WhyChooseUs = () => {
    return (
        <div>
            <div className='my-10 text-center'>
                <h1 className='text-3xl mb-2 font-semibold '>Why Choose Us</h1>
                <p>Empowering Your Financial Future Through Expert Money Management</p>
            </div>

            <div className='flex flex-col md:flex-row gap-5 max-w-[1300px] mx-auto  '>
                <div className='rounded-xl text-center p-10 flex flex-col gap-2 bg-green-300 justify-center items-center'>
                    <img src={expence} className='h-20 w-20 p-4 bg-white rounded-full' alt="" />
                    <h1 className='text-2xl font-semibold'>Expance Categorization</h1>
                    <p>Easily categorize and analyze your expenses with our intuitive system</p>
                </div>
                <div className='rounded-xl text-center p-10 flex flex-col gap-2 bg-green-300 justify-center items-center'>
                    <img src={Security} className='h-20 w-20 p-4 bg-white rounded-full' alt="" />
                    <h1 className='text-2xl font-semibold'>Security</h1>
                    <p>We prioritize the safety of your customers data, adhearing to the latest industry standards </p>
                </div>
                <div className='rounded-xl text-center p-10 flex flex-col gap-2 bg-green-300 justify-center items-center'>
                    <img src={debt} className='h-20 w-20 p-4 bg-white rounded-full' alt="" />
                    <h1 className='text-2xl font-semibold'>Debt Management</h1>
                    <p>Track balances, set payoff goalswith our specialized tools</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;