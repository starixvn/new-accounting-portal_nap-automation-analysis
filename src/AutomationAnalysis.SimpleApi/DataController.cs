namespace AutomationAnalysis.SimpleApi
{
    using AutomationAnalysis.Extensions;
    using Fanex.Data.Repository;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    [Route("simple-api")]
    public class DataController : Controller
    {
        private readonly SimpleCriteriaFactory simpleCriteriaFactory;

        public DataController(SimpleCriteriaFactory simpleCriteriaFactory)
        {
            this.simpleCriteriaFactory = simpleCriteriaFactory;
        }

        [Route("query")]
        [HttpGet]
        public async Task<IActionResult> Query([FromQuery] Dictionary<string, string> queryModel)
        {
            queryModel ??= new Dictionary<string, string>();

            queryModel = queryModel.CloneCaseInSensitive();

            var apiKey = queryModel.ContainsKey("apikey") && queryModel["apikey"] != null ? queryModel["apikey"].ToString() : "";
            if (string.IsNullOrEmpty(apiKey))
            {
                return NotFound("apikey is empty");
            }

            var criteriaType = simpleCriteriaFactory.GetCriteriaType(apiKey);
            if (criteriaType == null)
            {
                return NotFound("Data api is not found. Please check the method GetCriteriaType");
            }

            var criteria = simpleCriteriaFactory.CreateCriteria(criteriaType, queryModel);
            if (criteria == null)
            {
                return NotFound("Data api is not found. Please check the method CreateCriteria");
            }

            if (!criteria.IsValid())
            {
                return BadRequest("Bad request. Invalid request message parameters");
            }

            var repository = new DynamicRepository();
            var data = await repository.FetchAsync<dynamic>(criteria);

            return Ok(data);
        }
    }
}