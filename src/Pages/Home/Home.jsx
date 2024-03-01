
import WhyChooseUs from "../../Components/HelpDesk/WhyChooseUs";
import NewsLetter from "../../Components/Home/NewsLetter";

import Banner from "./Banner";
import FeatureHome from "./FeatureHome";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeatureHome></FeatureHome>
      {/* <NewsLetter></NewsLetter> */}
      <NewsLetter />
      <WhyChooseUs></WhyChooseUs>
    
    </div>
  );
};

export default Home;
