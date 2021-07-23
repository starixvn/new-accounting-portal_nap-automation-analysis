export default function HeaderForRedCard() {
  return (
    <>
      <tr>
        <th colSpan={2} className="score-header">
          Time
        </th>
        <th rowSpan={2} className="score-header align-middle">
          No. Of League
        </th>
        <th rowSpan={2} className="score-header align-middle">
          No. Of Match
        </th>
        <th colSpan={2} className="score-header">
          Before RedCard
        </th>
        <th colSpan={2} className="score-header">
          After RedCard
        </th>
        <th colSpan={2} className="score-header">
          Difference
        </th>
      </tr>
      <tr>
        <th className="home-bg">From</th>
        <th className="away-bg">To</th>
        <th className="home-bg">HDP</th>
        <th className="away-bg">OU</th>
        <th className="home-bg">HDP</th>
        <th className="away-bg">OU</th>
        <th className="home-bg">HDP</th>
        <th className="away-bg">OU</th>
      </tr>
    </>
  );
}
