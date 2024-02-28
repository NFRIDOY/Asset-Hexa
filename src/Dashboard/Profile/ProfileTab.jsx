import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyBlogsTable from "./MyBlogsTable";
import MybusinessTable from "./business/MybusinessTable";
import MyInvestmentTable from "./investment/MyInvestmentTable";

const ProfileTab = () => {
    return (
        <div className="">
            <div className="mt-14">
                <Tabs className={"mt-8"}>
                    <TabList className={"flex font-bold gap-5 justify-center border-b"}>
                        <Tab>My Blogs</Tab>
                        <Tab>My Business</Tab>
                        <Tab>My Investments</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="mt-2 space-y-3">

                            <MyBlogsTable />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-8 space-y-3">
                           <MybusinessTable/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-8 space-y-3">
                            
                            <MyInvestmentTable />
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ProfileTab;