using AutoMapper;
using AutomationAnalysis.ISNOdds.Models;

namespace AutomationAnalysis.ISNOdds
{
    public class ISNOddsProfile : Profile
    {
        public ISNOddsProfile()
        {
            CreateMap<MainExcelRequest, ISNOddsExcelFileInfoModel>()
                .ForMember(dest =>
                    dest.FromDate,
                    src => src.MapFrom(src => src.FromDate.ToString("MM/dd/yyyy")))
                .ForMember(dest =>
                    dest.ToDate,
                    src => src.MapFrom(src => src.ToDate.ToString("MM/dd/yyyy")))
                .ForMember(dest =>
                    dest.League,
                    src => src.MapFrom(src => string.IsNullOrEmpty(src.League) ? "All" : src.League))
                .ForMember(dest =>
                    dest.ReportOption,
                    src => src.MapFrom(src => src.ReportOption))
                .ForMember(dest =>
                    dest.TeamTypeTitle,
                    src => src.MapFrom(src => $"{src.ReportOption}:"))
                .ForMember(dest =>
                    dest.TotalGoalOrRedCardTitle,
                    src => src.MapFrom(src => "Total " + (src.ReportOption == "Goal" ? "Goal: " : "Red Card: ")))
                .ForMember(dest =>
                    dest.TotalGoalOrRedCard,
                    src => src.MapFrom(src => src.ReportOption == "Goal" ? src.Score : src.RedCard))
                .ForMember(dest =>
                    dest.CurrentGoalOrRedCardTitle,
                    src => src.MapFrom(src => "Current " + (src.ReportOption == "Goal" ? "Red Card: " : "Goal: ")))
                .ForMember(dest =>
                    dest.CurrentGoalOrRedCard,
                    src => src.MapFrom(src => src.ReportOption == "Goal" ? src.RedCard : src.Score))
                .ForMember(dest =>
                    dest.Interval,
                    src => src.MapFrom(src => src.ReportDetails != null ? $"{src.FromMinute}-{src.ToMinute}" : $"{src.Interval}"));
        }
    }
}