using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoFreightRepository.Models.CustomModel
{
    public  class UserProfileDBModel
    {
        public int? Id { get; set; }

        public string? FullName { get; set; }

        public string? Email { get; set; }

        public string? Password { get; set; }

        public string? CreatedBy { get; set; }

        public DateTime? CreatedDate { get; set; }
    }
}
