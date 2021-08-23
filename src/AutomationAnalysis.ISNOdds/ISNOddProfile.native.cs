using AutoMapper;
using AutomationAnalysis.ISNOdds.Models;

namespace AutomationAnalysis.ISNOdds
{
    public class ISNOddsProfile : Profile
    {
        public ISNOddsProfile()
        {
            CreateMap<ExcelRequest, ISNOddsExcelFileInfoModel>()
                .ForMember(dest =>
                    dest.FromDate,
                    src => src.MapFrom(excelRequest => excelRequest.FromDate.ToString("MM/dd/yyyy")))
                .ForMember(dest =>
                    dest.ToDate,
                    src => src.MapFrom(excelRequest => excelRequest.ToDate.ToString("MM/dd/yyyy")))
                .ForMember(dest =>
                    dest.League,
                    src => src.MapFrom(excelRequest => string.IsNullOrEmpty(excelRequest.League) ? "All" : excelRequest.League))
                .ForMember(dest =>
                    dest.ReportOption,
                    src => src.MapFrom(excelRequest => excelRequest.ReportOption))
                .ForMember(dest =>
                    dest.TeamTypeTitle,
                    src => src.MapFrom(excelRequest => $"{excelRequest.ReportOption}:"))
                .ForMember(dest =>
                    dest.TotalGoalOrRedCardTitle,
                    src => src.MapFrom(excelRequest => "Total " + (excelRequest.ReportOption == "Goal" ? "Goal: " : "Red Card: ")))
                .ForMember(dest =>
                    dest.TotalGoalOrRedCard,
                    src => src.MapFrom(excelRequest => excelRequest.ReportOption == "Goal" ? excelRequest.Score : excelRequest.RedCard))
                .ForMember(dest =>
                    dest.CurrentGoalOrRedCardTitle,
                    src => src.MapFrom(excelRequest => "Current " + (excelRequest.ReportOption == "Goal" ? "Red Card: " : "Goal: ")))
                .ForMember(dest =>
                    dest.CurrentGoalOrRedCard,
                    src => src.MapFrom(excelRequest => excelRequest.ReportOption == "Goal" ? excelRequest.RedCard : excelRequest.Score))
                .ForMember(dest =>
                    dest.Interval,
                    src => src.MapFrom(excelRequest => excelRequest.ReportDetails != null ? $"{excelRequest.FromMinute}-{excelRequest.ToMinute}" : $"{excelRequest.Interval}"));
        }
    }
}