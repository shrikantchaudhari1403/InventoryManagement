using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Services.Interface;

namespace Services.Wrapper
{
    public interface IBaseService
    {
        INegativeProfitShipmentService NegativeProfitShipmentService { get; }
        IAuthService AuthService { get; }
        IOceanExportService OceanExportService { get; }
    }
}
