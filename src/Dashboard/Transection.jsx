import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TransectionColumn from "../Components/TransectionColumn";
import useTransection from "../hooks/useTransection";

const Transection = () => {
  const { transections: incomes } = useTransection("INCOME");
  const { transections: expenses } = useTransection("EXPENSE");
  const { transections: tranfers } = useTransection("TRANSFER");

  return (
    <div className="max-w-7xl mx-auto min-h-screen p-10 bg-white rounded-lg font-bold text-2xl uppercase">
      <Tabs className={"mt-8"}>
        <TabList className={"flex gap-5 justify-center border-b"}>
          <Tab>Income</Tab>
          <Tab>Expense</Tab>
          <Tab>Transfer</Tab>
        </TabList>

        <TabPanel>
          <div className="mt-8 space-y-2 shadow-md shadow-[#38d626] p-5 border border-[#38d626]">
            {incomes?.length ? (
              incomes?.map((transection) => (
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
          <div className="mt-8 space-y-2 shadow-md shadow-[#38d626] p-5 border border-[#38d626]">
            {expenses?.length ? (
              expenses?.map((transection) => (
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
          <div className="mt-8 space-y-2 shadow-md shadow-[#38d626] p-5 border border-[#38d626]">
            {tranfers?.length ? (
              tranfers?.map((transection) => (
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
