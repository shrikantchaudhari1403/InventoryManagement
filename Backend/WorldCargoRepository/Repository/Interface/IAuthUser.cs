using WorldCargoRepository.Models;
using WorldCargoRepository.Models.CustomModel;
using WorldCargoRepository.Repository.Interface.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorldCargoRepository.Repository.Interface
{
    public interface IAuthUser : IBaseRepository<UserProfileDBModel>
    {
        Task<UserProfile> AuthenticateUser(UserProfile model);
    }
}
