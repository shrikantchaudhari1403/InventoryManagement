using WorldCargoRepository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WorldCargoHelpers;
using WorldCargoRepository.Repository.Interface;
using WorldCargoRepository.Repository.ConcreteClass;

namespace WorldCargoRepository.Wrapper
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private WorldCargoDBContext _repoContext;
        private IProfitShipment profitShipment;
        private IAuthUser authUser;

        public RepositoryWrapper() {
            _repoContext = new WorldCargoDBContext(Appconfigurations.ConnectionString);
        }  

        public IProfitShipment ProfitShipment
        {
            get
            {
                if(profitShipment == null)
                {
                    profitShipment =new ProfitShipment(_repoContext);
                }
                return profitShipment;
            }
        }

        public IAuthUser AuthUser
        {
            get
            {
                if (authUser == null)
                {
                   authUser= new AuthUser(_repoContext);
                }
                return authUser;
            }
        }

        public void Save()
        {
            _repoContext.SaveChanges();
        }
    }
}
