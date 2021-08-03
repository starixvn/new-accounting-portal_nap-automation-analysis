using AutoMapper;
using AutomationAnalysis.ISNOdds.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
                    dest.InitialHDP,
                    src => src.MapFrom(src => $"From {src.FromInitialHDP} To {src.ToInitialHDP}"))
                .ForMember(dest =>
                    dest.InitialOU,
                    src => src.MapFrom(src => $"From {src.FromInitialOU} To {src.ToInitialOU}"))
                .ForMember(dest =>
                    dest.ReportOption,
                    src => src.MapFrom(src => src.ReportOption))
                .ForMember(dest =>
                    dest.Score,
                    src => src.MapFrom(src => $"{src.HomeScore}-{src.AwayScore}"))
                .ForMember(dest =>
                    dest.RedCard,
                    src => src.MapFrom(src => $"{src.HomeRedCard}-{src.AwayRedCard}"))
                .ForMember(dest =>
                    dest.Interval,
                    src => src.MapFrom(src => $"{src.Interval}"));
        }
    }
}