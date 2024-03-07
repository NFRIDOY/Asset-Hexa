import expence from "../../assets/WhyChooseUs/expense-1658113-1407314.webp";
import Security from "../../assets/WhyChooseUs/secure-icon-png-4986.png";
import debt from "../../assets/WhyChooseUs/4334503.png";

const WhyChooseUs = () => {
  return (
    <div className="my-40 px-2">
      <div className="my-10 text-center">
        <h1 className="text-3xl mb-2 font-semibold ">Why Choose Us</h1>
        <p>Empowering Your Financial Future Through Expert Money Management</p>
      </div>

      <div className="grid  grid-cols-1 lg:grid-cols-3  gap-5 max-w-[1300px] mx-auto  ">
        <div className="rounded-xl text-center p-10 flex flex-col gap-2 bg-green-300 justify-center items-center">
          <img
            src={expence}
            className="h-20 w-20 p-4 bg-white rounded-full"
            alt=""
          />
          <h1 className="text-2xl font-semibold">Business For Funding</h1>
          <p>
            Post Business For Funding
          </p>
        </div>
        <div className="rounded-xl text-center p-10 flex flex-col gap-2 bg-green-300 justify-center items-center">
          <img
            src={Security}
            className="h-20 w-20 p-4 bg-white rounded-full"
            alt=""
          />
          <h1 className="text-2xl font-semibold">Security</h1>
          <p>
            We prioritize the safety of your customers data, adhearing to the
            latest industry standards{" "}
          </p>
        </div>
        <div className="rounded-xl text-center p-10 flex flex-col gap-2 bg-green-300 justify-center items-center">
          <img
            src={debt}
            className="h-20 w-20 p-4 bg-white rounded-full"
            alt=""
          />
          <h1 className="text-2xl font-semibold">Investment Management</h1>
          <p>You can Invest and make Profite</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
