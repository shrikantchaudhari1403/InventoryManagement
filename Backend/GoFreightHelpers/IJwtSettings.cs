using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoFreightHelpers
{
    public interface IJwtSettings
    {
        public string SecretKey { get; }
        public string Issuer { get; }   
        public string Audience { get; }    
        public string Subject { get;} 
        public int ExpiryMinutes { get;}

    }
}
