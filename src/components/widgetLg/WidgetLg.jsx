import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/564x/1c/2f/32/1c2f32cd25e3fd54f514161b51cabd6b.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Peter Parker</span>
          </td>
          <td className="widgetLgDate">4 Jun 2003</td>
          <td className="widgetLgAmount">$111.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/280x280_RS/b4/d1/42/b4d142020848dd74eaa355b3438c445f.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Bruce Wayne</span>
          </td>
          <td className="widgetLgDate">20 Aug 2008</td>
          <td className="widgetLgAmount">$5423675465.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Captain-America.Captain-America-the-First-Avenger.webp"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Steve Rogers</span>
          </td>
          <td className="widgetLgDate">15 May 1915</td>
          <td className="widgetLgAmount">$23.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/280x280_RS/62/13/83/6213832e575e6b9968c4cc0f211b6cf2.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Clint Barton</span>
          </td>
          <td className="widgetLgDate">24 Jan 2012</td>
          <td className="widgetLgAmount">$567.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
