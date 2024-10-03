using Services.DTO.Request;
using Services.DTO.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interface
{
    public  interface IOceanExportService
    {
        List<OceanExportHblInformationDTO> GetOceanExportHblData();
        Task<Boolean> AddHblData(AddHblRequestModel model);
        Task<Boolean> AddMblData(AddMblRequestModel model);

    }
}
