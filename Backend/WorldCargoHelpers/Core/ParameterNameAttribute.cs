using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoFreightHelpers.Core
{
    [System.AttributeUsage(AttributeTargets.Property)]
    public class ParameterNameAttribute : System.Attribute
    {
        private string name;
        public string Name { get { return name; } }

        public ParameterNameAttribute(string name)
        {
            this.name = $"{name}";
        }

    }
}
