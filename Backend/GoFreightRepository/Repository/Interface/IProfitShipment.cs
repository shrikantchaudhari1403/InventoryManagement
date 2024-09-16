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
    public interface IProfitShipment: IBaseRepository<NegativeProfitShipmentDBModel>
    {
        IQueryable<NegativeProfitShipment> AddNegativeShipmentData(NegativeProfitShipment model);
        IQueryable<NegativeProfitShipment> GetAllNegativeShipmentData();
        Task<Boolean> DeleteShipmentData(int id);
        IQueryable<NegativeProfitShipment> UpdateNegativeShipmentData(NegativeProfitShipment model);

    }
}
