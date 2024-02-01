import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TransectionColumn from "../Components/TransectionColumn";
import useTransection from "../hooks/useTransection";

const Transection = () => {
  const { transections: incomes } = useTransection("INCOME");
  const { transections: expenses } = useTransection("EXPENSE");
  const { transections: tranfers } = useTransection("TRANSFER");

  console.log(expenses, tranfers);

  return (
    <div>
      {/* <h2>Transection</h2> */}
      <h1 className="my-10 text-5xl text-center font-bold text-emerald-500 uppercase">
      Transections
      </h1>
      <Tabs>
        <TabList className={"flex gap-5 justify-center border-b"}>
          <Tab>Income</Tab>
          <Tab>Expense</Tab>
          <Tab>Transfer</Tab>
        </TabList>

        <TabPanel>
          <div className="mt-8 space-y-3">
            {incomes.map((transection) => (
              <TransectionColumn
                key={transection._id}
                transection={transection}
              ></TransectionColumn>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-8 space-y-3">
            {expenses.map((transection) => (
              <TransectionColumn
                key={transection._id}
                transection={transection}
              ></TransectionColumn>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-8 space-y-3">
            {tranfers.map((transection) => (
              <TransectionColumn
                key={transection._id}
                transection={transection}
              ></TransectionColumn>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Transection;
