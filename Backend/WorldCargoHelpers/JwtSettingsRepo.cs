using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace WorldCargoHelpers
{
    public class JwtSettingsRepo : IJwtSettings
    {
        private IConfiguration _configuration;
        public JwtSettingsRepo(IConfiguration configuration)
        {
            _configuration = configuration;       
        }

        public string SecretKey => _configuration["JwtSettings:SecretKey"];
        public string Issuer => _configuration["JwtSettings:Issuer"];
        public string Audience => _configuration["JwtSettings:Audience"];
        public string Subject => _configuration["JwtSettings:Subject"];
        public int ExpiryMinutes => Convert.ToInt32(_configuration["JwtSettings:ExpiryMinutes"]);
    }
}
