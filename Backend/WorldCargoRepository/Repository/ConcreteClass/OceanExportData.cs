using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WorldCargoRepository.Models;
using WorldCargoRepository.Repository.ConcreteClass.Base;
using WorldCargoRepository.Repository.Data;
using WorldCargoRepository.Repository.Data.Models;
using WorldCargoRepository.Repository.Interface;

namespace WorldCargoRepository.Repository.ConcreteClass
{
    public class OceanExportData: BaseRepository<OceanExportHblInformationModel>, IOceanExportData
    {
        WorldCargoDBContext _dBContext;
        private string _connectionsString;
       
        public OceanExportData(WorldCargoDBContext dbContext): base(dbContext) 
        {
            _dBContext = dbContext;
            _connectionsString = _dBContext.Database.GetDbConnection().ConnectionString;
        }

        public IEnumerable<OceanExportHblInformationModel> GetOceanExportHblData(Dictionary<string, string> parameters) =>
            (IEnumerable<OceanExportHblInformationModel>) new OcianExportDataManagement().GetMblData(_connectionsString,parameters);

        public Task<Boolean> AddHblData(Dictionary<string, string> parameters) =>
          (Task<Boolean>)new OcianExportDataManagement().AddHblData(_connectionsString, parameters);

        public Task<Boolean> AddMblData(Dictionary<string, string> parameters) =>
          (Task<Boolean>)new OcianExportDataManagement().AddMblData(_connectionsString, parameters);
    }
}
