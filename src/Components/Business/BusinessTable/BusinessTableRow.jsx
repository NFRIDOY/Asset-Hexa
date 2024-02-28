
// eslint-disable-next-line react/prop-types
export default function BusinessTableRow({ investment, index }) {
    // eslint-disable-next-line react/prop-types
    const { CompanyName, BrandImage, totalInvestment, investor, Profit } = investment;
    return (
        <tr className="h-10">
            <th>{index}</th>
            <th><img src={BrandImage} alt="" className="h-10" /></th>
            <td>{CompanyName}</td>
            <td>{totalInvestment}</td>
            <td>{Profit}%</td>
            <td className="">{Profit * totalInvestment / 100}</td>
            {/* <td className="w-full border-2 text-center">{Profit * totalInvestment / 100}</td> */}
        </tr>
    )
}
