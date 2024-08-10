using GoFreightHelpers;
using GoFreightRepository.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Services.DTO.Request;
using Services.DTO.Response;
using Services.Interface;
using Services.Wrapper;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;


namespace Services.ConcreteClass
{
    public class AuthService : BaseService,IAuthService
    {
        private IJwtSettings _jwtSettings;

        public AuthService()
        {

        }

        //public AuthService(IJwtSettings jwtSettings)
        //{
        //    _jwtSettings = jwtSettings;
        //}

        public Task<UserDataResponseDTO> Login(UserDataRequestModel model, IJwtSettings jwtSettings)
        {
            _jwtSettings = jwtSettings;
            UserDataResponseDTO result= new UserDataResponseDTO();
            UserProfile dbObject = new UserProfile()
            {
                Email = model.Email,
                Password = model.Password,
                Id= model.Id,
                FullName= model.DisplayName,
            };

            var data = _repo.AuthUser.AuthenticateUser(dbObject).Result;
            if (data.IsAuthenticated == true)
            {
                var token = GenerateToken(data);
                result.CreatedDate = DateTime.UtcNow;
                result.token= token;
                result.CreatedBy = data.Email;
                result.IsAuthenticated = true;
            }
            return Task.FromResult(result);
        }

         public string GenerateToken(UserProfile model)
        {
            var claims = new[]
           {
                 new Claim(JwtRegisteredClaimNames.Sub,model.Email),
                 new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                 new Claim("UserId", model.Email.ToString()),
                 new Claim("DisplayName", model.FullName.ToString())
             };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSettings.SecretKey));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _jwtSettings.Issuer,
                audience: _jwtSettings.Audience,
                claims: claims,
                expires: DateTime.Now.AddMinutes(_jwtSettings.ExpiryMinutes),
                signingCredentials: cred
                );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
