using Newtonsoft.Json;

namespace FrontendFundamentalsAPI.Models
{
  public class LoginResponse
  {
    [JsonProperty("username")]
    public string Username { get; set; }

    [JsonProperty("name")]
    public string Name { get; set; }

    [JsonProperty("surname")]
    public string Surname { get; set; }
  }
}
