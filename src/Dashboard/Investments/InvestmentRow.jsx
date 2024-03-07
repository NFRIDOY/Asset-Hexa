// eslint-disable-next-line react/prop-types
export default function InvestmentRow({ investment, index }) {
  // eslint-disable-next-line react/prop-types
  const { CompanyName, BrandImage, totalInvestment, Profit } = investment;
  return (
    <tr className="h-10">
      <th>{index}</th>
      <th>
        <img src={BrandImage} alt="" className="h-10" />
      </th>
      <td>{CompanyName}</td>
      <td>{totalInvestment}</td>
      <td>{investment?.investment}</td>
      <td>{Profit}%</td>
      {/* <td className="w-full border-2 text-center">{Profit * totalInvestment / 100}</td> */}
      {/* <td className="">{Profit * investment?.investment / 100}</td> */}
      {/* <td>{investor}</td> */}
      {/* <td>Blue</td> */}
    </tr>
  );
}
