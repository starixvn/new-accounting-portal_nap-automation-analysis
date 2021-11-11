export default function HeaderForGoal() {
  return (
    <>
      <tr>
        <th colSpan={2}>Time</th>
        <th rowSpan={2} className="align-middle">
          No. Of League
        </th>
        <th rowSpan={2} className="align-middle">
          No. Of Match
        </th>
        <th colSpan={2}>Before Goal</th>
        <th colSpan={2}>After Goal</th>
        <th colSpan={2}>Difference</th>
      </tr>
      <tr>
        <th style={{ width: '10%' }}>From</th>
        <th style={{ width: '10%' }}>To</th>
        <th style={{ width: '10%' }}>HDP</th>
        <th style={{ width: '10%' }}>OU</th>
        <th style={{ width: '10%' }}>HDP</th>
        <th style={{ width: '10%' }}>OU</th>
        <th style={{ width: '10%' }}>HDP</th>
        <th style={{ width: '10%' }}>OU</th>
      </tr>
    </>
  );
}
