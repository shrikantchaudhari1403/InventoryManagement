using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.DTO.Request;
using Services.Wrapper;

namespace WorldCargoShipmentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OceanExportController : ControllerBase
    {

        IBaseService _baseService;
        public OceanExportController(IBaseService baseService)
        {
            _baseService = baseService;
        }

        [HttpGet("GetAllHblData")]
        public async Task<IActionResult> GetAllHblData()
        {

            var result = _baseService.OceanExportService.GetOceanExportHblData();
            return Ok(result);

        }

        [HttpPost("AddHblData")]
        public async Task<IActionResult> AddHblData([FromBody] AddHblRequestModel model)
        {

            var result = _baseService.OceanExportService.AddHblData(model);
            return Ok(result);

        }

        [HttpPost("AddMblData")]
        public async Task<IActionResult> AddMblData([FromBody] AddMblRequestModel model)
        {
            var result = _baseService.OceanExportService.AddMblData(model);
            return Ok(result);

        }


        [HttpPut("UpdateNewShipmentMblData")]
        public async Task<IActionResult> UpdateNewShipmentMblData(NegativeProfitShipmentRequestModel model)
        {
            var result = _baseService.NegativeProfitShipmentService.UpdateNegatieShipment(model);
            return Ok(result);
        }

        [HttpDelete("DeleteNewShipmentMblData")]
        public async Task<IActionResult> DeleteNewShipmentMblData(string Id)
        {
            int shipmentId = Convert.ToInt32(Id);
            var result = _baseService.NegativeProfitShipmentService.DeleteNegativeProfitShipments(shipmentId);
            return Ok(result);
        }
    }
}
