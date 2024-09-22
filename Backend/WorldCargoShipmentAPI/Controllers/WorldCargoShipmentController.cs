using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Wrapper;
using Services.DTO.Request;
using Services.DTO.Response;
using Microsoft.AspNetCore.Authorization;

namespace WorldCargoShipmentAPI.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class WorldCargoShipmentController : ControllerBase
    {
        IBaseService _baseService;
        public WorldCargoShipmentController(IBaseService baseService)
        {
            _baseService = baseService;
        }

        [HttpGet("GetAllNegativeShipmentData")]
        public async Task<IActionResult> GetAllNegativeShipmentData() {
            
            var result = _baseService.NegativeProfitShipmentService.GetNegativeProfitShipments();
            return Ok(result);
        
        }

        [HttpPost("AddNegativeShipmentData")]
        public async Task<IActionResult> AddNegativeShipmentData(NegativeProfitShipmentRequestModel model)
        {
            var result = _baseService.NegativeProfitShipmentService.AddNegativeProfitShipments(model);
            return Ok(result);
        }

        [HttpPut("UpdateNegativeShipmentData")]
        public async Task<IActionResult> UpdateNegativeShipmentData(NegativeProfitShipmentRequestModel model)
        {
            var result = _baseService.NegativeProfitShipmentService.UpdateNegatieShipment(model);
            return Ok(result);
        }

        [HttpDelete("DeleteNegativeShipmentData")]
        public async Task<IActionResult> DeleteNegativeShipmentData(string Id)
        {
            int shipmentId = Convert.ToInt32(Id);
            var result = _baseService.NegativeProfitShipmentService.DeleteNegativeProfitShipments(shipmentId);
            return Ok(result);
        }
    }
}
