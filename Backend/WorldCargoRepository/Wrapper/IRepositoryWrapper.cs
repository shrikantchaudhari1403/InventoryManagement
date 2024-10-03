using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WorldCargoRepository.Repository.Interface;

namespace WorldCargoRepository.Wrapper
{
    public interface IRepositoryWrapper
    {
        IProfitShipment ProfitShipment { get; }
        IAuthUser AuthUser { get; }
        IOceanExportData OceanExportData { get; }
    }
}
