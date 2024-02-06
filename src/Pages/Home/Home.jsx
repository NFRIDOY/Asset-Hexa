import WhyChooseUs from "../../Components/HelpDesk/WhyChooseUs";
 
import Pricing from "../Pricing/Pricing";
import Banner from "./Banner";
import FeatureHome from "./FeatureHome";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureHome></FeatureHome>
            <WhyChooseUs></WhyChooseUs>
           
            <Pricing></Pricing>
        </div>
    );
};

export default Home;
