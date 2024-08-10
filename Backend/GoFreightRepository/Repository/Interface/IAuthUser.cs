using GoFreightRepository.Models;
using GoFreightRepository.Models.CustomModel;
using GoFreightRepository.Repository.Interface.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoFreightRepository.Repository.Interface
{
    public interface IAuthUser : IBaseRepository<UserProfileDBModel>
    {
        Task<UserProfile> AuthenticateUser(UserProfile model);
    }
}
