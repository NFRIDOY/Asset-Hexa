import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TransectionColumn from "../Components/TransectionColumn";

const Transection = () => {
  return (
    <div>
      <h2>Transection</h2>
      <Tabs>
        <TabList className={"flex gap-5 justify-center border-b"}>
          <Tab>Expense</Tab>
          <Tab>Income</Tab>
        </TabList>

        <TabPanel>
          <div className="mt-8 space-y-3">
            <TransectionColumn transactionType={'EXPENSE'}/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-8 space-y-3">
            <TransectionColumn transactionType={'INCOME'} />
            
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Transection;
