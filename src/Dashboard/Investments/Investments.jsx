import InvestmentTable from "./investmentTable";


export default function Investments() {
    return (
        // <div style={{ border: "2px solid red" }} className="h-[calc(100vh-32px)] p-5">
        <div className="h-screen p-5">
            <h1 className="text-center text-4xl font-bold">Investments</h1>
            <section className="flex">
                <div className=" border-2 h-60 w-60"> Pi Chart </div>
                <div className="table investment">
                    <InvestmentTable />
                </div>
            </section>
        </div>
    )
}
