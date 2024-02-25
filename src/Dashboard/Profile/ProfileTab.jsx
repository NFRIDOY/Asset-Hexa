import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyBlogsTable from "./MyBlogsTable";
import MybusinessTable from "./business/MybusinessTable";

const ProfileTab = () => {
    return (
        <div className="">
            <div className="mt-14">
                <Tabs className={"mt-8"}>
                    <TabList className={"flex font-bold gap-5 justify-center border-b"}>
                        <Tab>My Blogs</Tab>
                        <Tab>My Investments</Tab>
                        {/* <Tab>My company</Tab> */}
                    </TabList>

                    <TabPanel>
                        <div className="mt-2 space-y-3">
                           
                            <MyBlogsTable/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-8 space-y-3">
                            <MybusinessTable/>
                        </div>
                    </TabPanel>
                    {/* <TabPanel>
                        <div className="mt-8 space-y-3">
                            <h1>Investments</h1>
                        </div>
                    </TabPanel> */}
                </Tabs>
            </div>
        </div>
    );
};

export default ProfileTab;