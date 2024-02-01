import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TransectionColumn from "../Components/TransectionColumn";
import useTransection from "../hooks/useTransection";

const Transection = () => {
  const { transections: incomes } = useTransection("INCOME");
  const { transections: expenses } = useTransection("EXPENSE");
  const { transections: tranfers } = useTransection("TRANSFER");

  return (
    <div>
      <Tabs className={"mt-8"}>
        <TabList className={"flex gap-5 justify-center border-b"}>
          <Tab>Income</Tab>
          <Tab>Expense</Tab>
          <Tab>Transfer</Tab>
        </TabList>

        <TabPanel>
          <div className="mt-8 space-y-3">
            {incomes.length ? (
              incomes.map((transection) => (
                <TransectionColumn
                  key={transection._id}
                  transection={transection}
                ></TransectionColumn>
              ))
            ) : (
              <div className="flex justify-center items-center text-4xl font-extrabold">
                <h1 className="mt-28 uppercase">No DATA</h1>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-8 space-y-3">
            {expenses.length ? (
              expenses.map((transection) => (
                <TransectionColumn
                  key={transection._id}
                  transection={transection}
                ></TransectionColumn>
              ))
            ) : (
              <div className="flex justify-center items-center text-4xl font-extrabold">
                <h1 className="mt-28 uppercase">No DATA</h1>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-8 space-y-3">
            {tranfers.length ? (
              tranfers.map((transection) => (
                <TransectionColumn
                  key={transection._id}
                  transection={transection}
                ></TransectionColumn>
              ))
            ) : (
              <div className="flex justify-center items-center text-4xl font-extrabold">
                <h1 className="mt-28 uppercase">No DATA</h1>
              </div>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Transection;
