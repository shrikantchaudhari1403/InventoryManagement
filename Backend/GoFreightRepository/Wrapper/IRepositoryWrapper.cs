using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GoFreightRepository.Repository.Interface;

namespace GoFreightRepository.Wrapper
{
    public interface IRepositoryWrapper
    {
        IProfitShipment ProfitShipment { get; }
        IAuthUser AuthUser { get; } 
    }
}
