using System.Drawing;

namespace AutomationAnalysis.ISNOdds.Constant
{
    public static class ReportConst
    {
        public const int StartIndexRow = 14;
        public const string BeforeModeMainCell = "E12";
        public const string AfterModeMainCell = "G12";
        public const string BeforeModeDrilldownCell = "F12";
        public const string AfterModeDrilldownCell = "H12";
        public const int LeagueCol = 2;
        public const int LeagueRow = 2;
        public static readonly Color LeagueBackgroundColor = Color.FromArgb(0, 114, 159, 207);
    }
}