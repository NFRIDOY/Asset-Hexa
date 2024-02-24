
export default function InvestmentRow({investment, index}) {
    const {CompanyName, BrandImage, totalInvestment} = investment;
    return (
        <tr className="h-10">
            <th>{index}</th>
            <th><img src={BrandImage} alt="" className="h-10" /></th>
            <td>{CompanyName}</td>
            <td>{totalInvestment}</td>
            {/* <td>Blue</td> */}
        </tr>
    )
}
