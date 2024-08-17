using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Wrapper;
using Services.DTO.Request;
using Services.DTO.Response;
using Microsoft.AspNetCore.Authorization;

namespace GoFreightShipmentAPI.Controllers
{
    [Route("api/[controller]")]
   // [Authorize]
    [ApiController]
    public class GoFrightShipmentController : ControllerBase
    {
        IBaseService _baseService;
        public GoFrightShipmentController(IBaseService baseService)
        {
            _baseService = baseService;
        }

     //   [Authorize]
        [HttpGet("/GetAllNegativeShipmentData")]
        public async Task<IActionResult> GetAllNegativeShipmentData() {
            
            var result = _baseService.NegativeProfitShipmentService.GetNegativeProfitShipments();
            return Ok(result);
        
        }

        [HttpPut]
        public async Task<IActionResult> UpdateNegativeShipmentData(NegativeProfitShipmentRequestModel model)
        {
            var result = _baseService.NegativeProfitShipmentService.UpdateNegatieShipment(model);
            return Ok(result);
        }

      //  [Authorize]
        [HttpDelete]
        public async Task<IActionResult> DeleteNegativeShipmentData(string id)
        {
            int shipmentId = Convert.ToInt32(id);
            var result = _baseService.NegativeProfitShipmentService.DeleteNegativeProfitShipments(shipmentId);
            return Ok(result);
        }
    }
}
