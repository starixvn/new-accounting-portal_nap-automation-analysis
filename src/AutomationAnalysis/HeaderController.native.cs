using Fanex.NAP.Client.Helpers.Web;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace AutomationAnalysis
{
    [Route("api/[controller]")]
    [ApiController]
    public class HeaderController : ControllerBase
    {
        private readonly INapSession session;

        public HeaderController(INapSession session)
        {
            this.session = session;
        }

        [Route("menu")]
        [Produces("application/json")]
        public IEnumerable<dynamic> GetMenu() => session.MenuItemList.Select(m => new { m.Url, m.Name });
    }
}
