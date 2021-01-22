using FrontendFundamentalsAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FrontendFundamentalsAPI.Controllers
{
  [Route("api/login")]
  [ApiController]
  public class LoginController : ControllerBase
  {
    private readonly ILogger<WeatherForecastController> _logger;

    public LoginController(ILogger<WeatherForecastController> logger)
    {
      _logger = logger;
    }
    /// <summary>
    /// Login
    /// </summary>
    /// <param name="request"></param>
    /// <returns></returns>
    [HttpPost]
    public ActionResult Login([FromBody] LoginRequest request)
    {
      return new OkObjectResult(new LoginResponse()
      {
        Name = "Donald",
        Surname = "Trump",
        Username = request.Username
      });
    }
  }
}
