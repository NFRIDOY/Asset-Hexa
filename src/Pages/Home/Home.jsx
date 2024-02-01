import WhyChooseUs from "../../Components/HelpDesk/WhyChooseUs";
import Blog from "../../Dashboard/AddBlogs/Blog/Blog";
import Banner from "./Banner";
import FeatureHome from "./FeatureHome";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureHome></FeatureHome>
            <WhyChooseUs></WhyChooseUs>
            <Blog></Blog>
        </div>
    );
};

export default Home;
