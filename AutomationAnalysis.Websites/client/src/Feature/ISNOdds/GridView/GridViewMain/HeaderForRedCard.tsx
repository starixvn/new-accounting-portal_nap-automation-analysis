export default function HeaderForRedCard() {
  return (
    <>
      <tr>
        <th colSpan={2}>Time</th>
        <th rowSpan={2} className=" align-middle">
          No. Of League
        </th>
        <th rowSpan={2} className=" align-middle">
          No. Of Match
        </th>
        <th colSpan={2}>Before RedCard</th>
        <th colSpan={2}>After RedCard</th>
        <th colSpan={2}>Difference</th>
      </tr>
      <tr>
        <th>From</th>
        <th>To</th>
        <th>HDP</th>
        <th>OU</th>
        <th>HDP</th>
        <th>OU</th>
        <th>HDP</th>
        <th>OU</th>
      </tr>
    </>
  );
}
