using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.DTO.Response
{
    public class NegativeProfitShipmentDTO
    {
        public int? Id { get; set; }
        public string? DepartmentName { get; set; }
        public string? FileNo { get; set; }
        public string? MawbNo { get; set; }
        public DateTime? EDT { get; set; }
        public DateTime? ETA { get; set; }
        public string? Profit { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
