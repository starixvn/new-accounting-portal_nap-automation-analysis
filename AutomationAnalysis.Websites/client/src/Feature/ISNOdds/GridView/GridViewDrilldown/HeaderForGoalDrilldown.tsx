export default function HeaderForRedCardDrilldown() {
  return (
    <>
      <tr>
        <th rowSpan={2} className="align-middle">
          #
        </th>
        <th rowSpan={2} className="align-middle">
          Event
        </th>
        <th style={{ width: '10%' }} rowSpan={2} className="align-middle">
          Minute
        </th>
        <th style={{ width: '10%' }} rowSpan={2} className="align-middle">
          Second
        </th>
        <th style={{ width: '10%' }} rowSpan={2} className="align-middle">
          Only Second
        </th>
        <th colSpan={2}>Before Goal</th>
        <th colSpan={2}>After Goal</th>
        <th colSpan={2}>Difference</th>
      </tr>
      <tr>
        <th style={{ width: '5%' }}>HDP</th>
        <th style={{ width: '5%' }}>OU</th>
        <th style={{ width: '5%' }}>HDP</th>
        <th style={{ width: '5%' }}>OU</th>
        <th style={{ width: '5%' }}>HDP</th>
        <th style={{ width: '5%' }}>OU</th>
      </tr>
    </>
  );
}
