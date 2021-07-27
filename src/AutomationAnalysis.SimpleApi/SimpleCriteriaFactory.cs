using System;
using System.Collections.Generic;
using AutomationAnalysis.SimpleApi.Criteria;
using Fanex.Data.Repository;
using Newtonsoft.Json;

namespace AutomationAnalysis.SimpleApi
{
    public interface SimpleCriteriaFactory
    {
        Type GetCriteriaType(string apiKey);

        ICriteria CreateCriteria(Type criteriaType, Dictionary<string, string> queryModel);
    }

    public class SimpleCriteriaFactoryBase : SimpleCriteriaFactory
    {
        protected static readonly Dictionary<string, Type> CriteriaTypes = new();

        static SimpleCriteriaFactoryBase()
        {
            RegisterISNOdds();
        }

        private static void RegisterISNOdds()
        {
            CriteriaTypes.Add(ConstantApiKey.ISNOddsByGoalRedCardQuery, typeof(ISNOddsByGoalRedCardQueryCriteria));
            CriteriaTypes.Add(ConstantApiKey.ISNOddsByGoalRedCardDetailQuery, typeof(ISNOddsByGoalRedCardDetailQueryCriteria));
        }

        public virtual ICriteria CreateCriteria(Type criteriaType, Dictionary<string, string> queryModel)
        {
            var json = JsonConvert.SerializeObject(queryModel);
            var criteria = JsonConvert.DeserializeObject(json, criteriaType);

            return (ICriteria)criteria;
        }

        public virtual Type GetCriteriaType(string apiKey)
        {
            return CriteriaTypes.ContainsKey(apiKey) ? CriteriaTypes[apiKey] : null;
        }
    }
}
