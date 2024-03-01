import Contact from "../../Contact/Contact";

import OurTeam from "./OurTeam";
import WhoWeAre from "./WhoWeAre";

 

const About = () => {
    return (
        <div>
            <div>
                <WhoWeAre></WhoWeAre>
               
            </div>
            <div>
                <OurTeam></OurTeam>
            </div>

            <Contact/>
            <div>
            
            </div>
        </div>
    );
};

export default About;