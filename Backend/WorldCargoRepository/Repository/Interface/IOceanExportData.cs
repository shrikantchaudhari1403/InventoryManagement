using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WorldCargoRepository.Repository.ConcreteClass.Base;
using WorldCargoRepository.Repository.Data.Models;
using WorldCargoRepository.Repository.Interface.Base;

namespace WorldCargoRepository.Repository.Interface
{
    public interface IOceanExportData:IBaseRepository<OceanExportHblInformationModel>
    {
        IEnumerable<OceanExportHblInformationModel> GetOceanExportHblData(Dictionary<string, string> parameters);

        Task<Boolean> AddHblData(Dictionary<string, string> parameters);

        Task<Boolean> AddMblData(Dictionary<string, string> parameters);

    }
}
