
// eslint-disable-next-line react/prop-types
export default function BusinessTableRow({ investment, index }) {
    // eslint-disable-next-line react/prop-types
    const { CompanyName, BrandImage, totalInvestment, investor } = investment;
    return (
        <tr className="h-10">
            <th>{index}</th>
            <th><img src={BrandImage} alt="" className="h-10" /></th>
            <td>{CompanyName}</td>
            <td>{totalInvestment}</td>
        </tr>
    )
}
