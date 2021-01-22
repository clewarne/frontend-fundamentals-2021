using Newtonsoft.Json;

namespace FrontendFundamentalsAPI.Models
{
  public class LoginRequest
  {
    [JsonProperty("username")]
    public string Username { get; set; }

    [JsonProperty("password")]
    public string Password { get; set; }
  }
}
