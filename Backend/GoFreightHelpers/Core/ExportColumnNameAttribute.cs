using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoFreightHelpers.Core
{
    [System.AttributeUsage(AttributeTargets.Property)]

    public class ExportColumnNameAttribute: System.Attribute
    {
        private string name;
        public string ExportName { get { return name; } }

        public ExportColumnNameAttribute(string name)
        {
            this.name = $"{name}";
        }
    }
}
