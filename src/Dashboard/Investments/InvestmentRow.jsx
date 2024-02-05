
export default function InvestmentRow({investment, index}) {
    const {email} = investment;
    return (
        <tr>
            <th>{index}</th>
            <td>{email}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
        </tr>
    )
}
