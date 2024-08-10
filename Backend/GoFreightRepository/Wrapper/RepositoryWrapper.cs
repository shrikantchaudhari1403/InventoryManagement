using GoFreightRepository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GoFreightHelpers;
using GoFreightRepository.Repository.Interface;
using GoFreightRepository.Repository.ConcreteClass;

namespace GoFreightRepository.Wrapper
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private GoFreightDBContext _repoContext;
        private IProfitShipment profitShipment;
        private IAuthUser authUser;

        public RepositoryWrapper() {
            _repoContext = new GoFreightDBContext(Appconfigurations.ConnectionString);
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
