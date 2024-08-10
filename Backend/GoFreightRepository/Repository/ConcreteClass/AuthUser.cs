using GoFreightRepository.Models;
using GoFreightRepository.Models.CustomModel;
using GoFreightRepository.Repository.ConcreteClass.Base;
using GoFreightRepository.Repository.Interface;
using GoFreightRepository.Repository.Interface.Base;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace GoFreightRepository.Repository.ConcreteClass
{
    public class AuthUser : BaseRepository<UserProfileDBModel>, IAuthUser
    {
        GoFreightDBContext _goFreightDBContext;
        public string _connectionString;
        public AuthUser(GoFreightDBContext goFreightDBContext) : base(goFreightDBContext)
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
