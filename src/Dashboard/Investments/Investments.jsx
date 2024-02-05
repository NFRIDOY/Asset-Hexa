import InvestmentTable from "./investmentTable";


export default function Investments() {
    return (
        // <div style={{ border: "2px solid red" }} className="h-[calc(100vh-32px)] p-5">
        <div className="h-screen p-5">
            <h1 className="text-center text-4xl font-bold">Investments</h1>
            <section className="flex">
                <div>
                    <div className="flex justify-center items-center ">
                        <button className="btn bg-[#00EC25] hover:bg-[#7dbb86]">
                            Be a Buisiness Promoter
                        </button>
                    </div>
                    <div className=" border-2 h-60 w-60"> Pi Chart </div>
                </div>
                <div className="table investment">
                    <InvestmentTable />
                </div>
            </section>
        </div>
    )
}
