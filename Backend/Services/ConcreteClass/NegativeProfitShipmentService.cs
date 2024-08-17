using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GoFreightRepository.Models;
using GoFreightRepository.Wrapper;
using Microsoft.EntityFrameworkCore;
using Services.DTO.Request;
using Services.DTO.Response;
using Services.Interface;
using Services.Wrapper;
namespace Services.ConcreteClass
{
    public class NegativeProfitShipmentService: BaseService,INegativeProfitShipmentService
    {
        public NegativeProfitShipmentService()
        {
        }

        public Task<bool> DeleteNegativeProfitShipments(int id)
        {
            var result = _repo.ProfitShipment.DeleteShipmentData(id);
            return result;
        }

        public List<NegativeProfitShipmentDTO> GetNegativeProfitShipments()
        {
            List<NegativeProfitShipmentDTO> dtos = new List<NegativeProfitShipmentDTO>();
            var shipments = _repo.ProfitShipment.GetAllNegativeShipmentData().ToList();
            shipments.ForEach((x) =>
            {
                dtos.Add(new NegativeProfitShipmentDTO {
                 //  EDT=x.EDT,
                   CreatedBy=x.CreatedBy,
                   CreatedDate=x.CreatedDate,
                 //  DepartmentName=x.DepartmentName,
                //   ETA=x.ETA,
                   FileNo=x.FileNo,
                   Id= x.Id,
                   MawbNo=x.MawbNo,
                //   ModifiedBy=x.ModifiedBy,
                //   ModifiedDate=x.ModifiedDate,
                   Profit= x.Profit
                });
            });
            return dtos.ToList();
        }

        public List<NegativeProfitShipmentDTO> UpdateNegatieShipment(NegativeProfitShipmentRequestModel model)
        {

            List<NegativeProfitShipmentDTO> dtos = new List<NegativeProfitShipmentDTO>();
            NegativeProfitShipment dataRequest = new NegativeProfitShipment()
            {
              //  EDT = model.EDT,
                CreatedBy = model.CreatedBy,
                CreatedDate = model.CreatedDate,
              //  DepartmentName = model.DepartmentName,
              //  ETA = model.ETA,
                FileNo = model.FileNo,
                Id = model.Id,
                MawbNo = model.MawbNo,
              //  ModifiedBy = model.ModifiedBy,
              //  ModifiedDate = model.ModifiedDate,
                Profit = model.Profit
            };
            var shipments = _repo.ProfitShipment.UpdateNegativeShipmentData(dataRequest).ToList();

            shipments.ForEach((x) =>
            {
                dtos.Add(new NegativeProfitShipmentDTO
                {
                   // EDT = x.EDT,
                    CreatedBy = x.CreatedBy,
                    CreatedDate = x.CreatedDate,
                  //  DepartmentName = x.DepartmentName,
                 //   ETA = x.ETA,
                    FileNo = x.FileNo,
                    Id = x.Id,
                    MawbNo = x.MawbNo,
                  //  ModifiedBy = x.ModifiedBy,
                  //  ModifiedDate = x.ModifiedDate,
                    Profit = x.Profit
                });
            });
            return dtos.ToList();
        }

    }
}
