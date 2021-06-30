using Fanex.NAP.Client.Helpers.Web;
using Microsoft.AspNetCore.Mvc;
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

        [Route("")]
        [Produces("application/json")]
        public dynamic Index()
        {
            var menus = session.MenuItemList.Select(m => new { m.Url, m.Name });
            var username = session.UserName;

            return new
            {
                User = username,
                Menus = menus
            };
        }

    }
}
