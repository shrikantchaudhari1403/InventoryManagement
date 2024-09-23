using WorldCargoRepository.Models;
using WorldCargoRepository.Models.CustomModel;
using WorldCargoRepository.Repository.ConcreteClass.Base;
using WorldCargoRepository.Repository.Interface;
using WorldCargoRepository.Repository.Interface.Base;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace WorldCargoRepository.Repository.ConcreteClass
{
    public class AuthUser : BaseRepository<UserProfileDBModel>, IAuthUser
    {
        WorldCargoDBContext _goFreightDBContext;
        public string _connectionString;
        public AuthUser(WorldCargoDBContext goFreightDBContext) : base(goFreightDBContext)
        {
            _goFreightDBContext= goFreightDBContext;
            _connectionString = goFreightDBContext.Database.GetDbConnection().ConnectionString;
        }
        public Task<UserProfile> AuthenticateUser(UserProfile model)
        {
            var result = _goFreightDBContext.UserProfiles.Where(x => x.Email == model.Email && x.Password == model.Password).FirstOrDefault();
            if(result != null)
            {
                 model.IsAuthenticated = true;
                model.FullName= result.FullName;
            }

            return Task.FromResult(model);
        }
       
    }
}
