using WorldCargoHelpers;
using Services.DTO.Request;
using Services.DTO.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interface
{
    public  interface IAuthService
    {
        Task<UserDataResponseDTO> Login(UserDataRequestModel model, IJwtSettings jwtSettings);

    }
}
