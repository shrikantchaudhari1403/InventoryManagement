using Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GoFreightRepository.Repository;
using GoFreightRepository.Wrapper;
using Services.ConcreteClass;

namespace Services.Wrapper
{
    public class BaseService : IBaseService
    {
        INegativeProfitShipmentService negativeProfitShipmentService;
        IAuthService authService; 
        internal IRepositoryWrapper _repo;

        public BaseService()
        {
            _repo = new RepositoryWrapper();  
        }
      
        public INegativeProfitShipmentService NegativeProfitShipmentService
        {
            get
            {
                if(negativeProfitShipmentService == null)
                {
                    negativeProfitShipmentService= new NegativeProfitShipmentService();
                }
                return negativeProfitShipmentService;
            }

        }

        public IAuthService AuthService
        {
            get
            {
                if(authService == null)
                {
                    authService = new AuthService();
                }
                return authService;
            }
        }
    }
}
