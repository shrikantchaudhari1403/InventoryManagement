using WorldCargoRepository.Models;
using WorldCargoRepository.Models.CustomModel;
using WorldCargoRepository.Repository.ConcreteClass.Base;
using WorldCargoRepository.Repository.Interface;
using WorldCargoRepository.Repository.Interface.Base;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorldCargoRepository.Repository.ConcreteClass
{
    public class ProfitShipment :BaseRepository<NegativeProfitShipmentDBModel>, IProfitShipment
    {
        WorldCargoDBContext _goFreightDBContext;
        public string _connectionString;

        public ProfitShipment(WorldCargoDBContext goFreightDBContext) : base(goFreightDBContext)
        {
                _goFreightDBContext = goFreightDBContext;
                _connectionString = goFreightDBContext.Database.GetDbConnection().ConnectionString;
        }

        public IQueryable<NegativeProfitShipment> GetAllNegativeShipmentData()
        {
            return _goFreightDBContext.NegativeProfitShipments.AsQueryable();
        }

        public Task<bool> DeleteShipmentData(int id)
        {
            NegativeProfitShipment data = _goFreightDBContext.NegativeProfitShipments.Where(x => x.Id == id).FirstOrDefault();

            if (data != null) {
               // _goFreightDBContext.NegativeProfitShipments.Attach(data);
                _goFreightDBContext.NegativeProfitShipments.Remove(data);
               // _goFreightDBContext.NegativeProfitShipments.Attach(data);
                _goFreightDBContext.SaveChanges();
            }
            return Task.FromResult(true);
        }

        public IQueryable<NegativeProfitShipment> UpdateNegativeShipmentData(NegativeProfitShipment model)
        {
            NegativeProfitShipment data = _goFreightDBContext.NegativeProfitShipments.Where(x => x.Id == model.Id).FirstOrDefault();

            if (data != null) { 
              
              //  data.ModifiedDate= DateTime.Now;
             //   data.ETA = model.ETA;
                data.Profit = model.Profit;
             //   data.DepartmentName= model.DepartmentName; 
             //   data.EDT= model.EDT; 
                data.FileNo= model.FileNo; 
                data.MawbNo= model.MawbNo; ;
            }
            _goFreightDBContext.SaveChanges();
            return _goFreightDBContext.NegativeProfitShipments.AsQueryable();
        }

        public IQueryable<NegativeProfitShipment> AddNegativeShipmentData(NegativeProfitShipment model)
        {
            NegativeProfitShipment data = _goFreightDBContext.NegativeProfitShipments.Where(x => x.MawbNo == model.MawbNo && x.FileNo== model.FileNo).FirstOrDefault();

            if (data == null)
            {
                _goFreightDBContext.Add(model);
                _goFreightDBContext.SaveChanges();

            } else
            {
                // record already present 
            }
            return _goFreightDBContext.NegativeProfitShipments.AsQueryable();

        }
    }
}
