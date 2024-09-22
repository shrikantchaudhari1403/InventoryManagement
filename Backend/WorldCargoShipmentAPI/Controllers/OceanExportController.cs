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

        [HttpGet("GetAllMblData")]
        public async Task<IActionResult> GetAllMblData()
        {

            var result = _baseService.NegativeProfitShipmentService.GetNegativeProfitShipments();
            return Ok(result);

        }

        [HttpPost("AddNewShipmentMblData")]
        public async Task<IActionResult> AddNewShipmentMblData(NegativeProfitShipmentRequestModel model)
        {
            var result = _baseService.NegativeProfitShipmentService.AddNegativeProfitShipments(model);
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
