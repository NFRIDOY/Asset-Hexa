import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyBlogsTable from "./MyPBlogs/MyBlogsTable";
import MybusinessTable from "./business/MybusinessTable";
import MyInvestmentTable from "./investment/MyInvestmentTable";
import BookmarkBlogs from "./MyBookmark/BookmarkBlogs";

const ProfileTab = () => {
  return (
    <div className="">
      <div className="mt-14 ">
        <Tabs className={"mt-8"}>
          <TabList className={"flex font-bold md:gap-5 justify-center   "}>
            <Tab>Blogs</Tab>
            {/* <Tab>Business</Tab> */}
            <Tab>Investments</Tab>
            <Tab>Bookmark </Tab>
          </TabList>

          <TabPanel>
            <div className="mt-2 space-y-3">
              <MyBlogsTable />
            </div>
          </TabPanel>
          {/* <TabPanel>
            <div className="mt-8 space-y-3">
              <MybusinessTable />
            </div>
          </TabPanel> */}
          <TabPanel>
            <div className="mt-8 space-y-3">
              <MyInvestmentTable />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-8 space-y-3">
              <BookmarkBlogs/>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileTab;
