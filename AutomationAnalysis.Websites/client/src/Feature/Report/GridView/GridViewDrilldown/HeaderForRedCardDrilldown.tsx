export default function HeaderForRedCardDrilldown() {
  return (
    <>
      <tr>
        <th rowSpan={2} className="score-header align-middle">
          #
        </th>
        <th rowSpan={2} className="score-header align-middle">
          Event
        </th>
        <th rowSpan={2} className="score-header align-middle">
          Minute
        </th>
        <th rowSpan={2} className="score-header align-middle">
          Second
        </th>
        <th rowSpan={2} className="score-header align-middle">
          Only Second
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
