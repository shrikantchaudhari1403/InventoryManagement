using GoFreightRepository.Models;
using Services.DTO.Request;
using Services.DTO.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interface
{
    public interface INegativeProfitShipmentService
    {
        List<NegativeProfitShipmentDTO> AddNegativeProfitShipments(NegativeProfitShipmentRequestModel model);
        List<NegativeProfitShipmentDTO> GetNegativeProfitShipments();

        Task<bool> DeleteNegativeProfitShipments(int id);

        List<NegativeProfitShipmentDTO> UpdateNegatieShipment(NegativeProfitShipmentRequestModel model);

    }
}
