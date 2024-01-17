

const Faq = () => {
    return (
        <div className="max-w-6xl mx-auto  mt-8">
            <div className="join join-vertical bg-[#23A455] text-white ">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                    How do I create an account on your platform?
                    </div>
                    <div className="collapse-content">
                        <p>To create an account, simply click on the Login button on the homepage then go to the registration page, fill in the required information, and follow the on-screen instructions to complete the registration process.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    Can I use your website on my mobile phone?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, our website is mobile-friendly. You can access and manage your finances on the go by using your smartphone or tablet.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                    How do I contact customer support if I encounter any issues?
                    </div>
                    <div className="collapse-content">
                        <p>If you have any questions or issues, visit our <span className="font-bold">Help Desk</span> where you can find helpful articles and FAQs. For personalized assistance, you can also reach out to our customer support team through the <span className="font-bold">Contact Us</span> page.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;