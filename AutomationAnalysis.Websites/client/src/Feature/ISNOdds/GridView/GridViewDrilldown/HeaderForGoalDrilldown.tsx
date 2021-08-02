export default function HeaderForRedCardDrilldown() {
  return (
    <>
      <tr>
        <th rowSpan={2} className="align-middle">
          #
        </th>
        <th rowSpan={2} className=" align-middle">
          Event
        </th>
        <th rowSpan={2} className=" align-middle">
          Minute
        </th>
        <th rowSpan={2} className=" align-middle">
          Second
        </th>
        <th rowSpan={2} className=" align-middle">
          Only Second
        </th>
        <th colSpan={2}>Before Goal</th>
        <th colSpan={2}>After Goal</th>
        <th colSpan={2}>Difference</th>
      </tr>
      <tr>
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
