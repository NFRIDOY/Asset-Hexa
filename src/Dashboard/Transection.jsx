import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Transection = () => {
  return (
    <div>
      <h2>Transection</h2>
      <Tabs>
        <TabList className={"flex justify-center border-b"}>
          <Tab>Expense</Tab>
          <Tab>Income</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Transection;
