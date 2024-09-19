using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;
using GoFreightHelpers.Core;

namespace GoFreightHelpers
{
    public class DatabaseHelper
    {
        public static Dictionary<string, string> GetParamList(object item)
        {
            Dictionary<string, string> keyValuePairs = new Dictionary<string, string>();

            foreach (var prop in item.GetType().GetProperties())
            {
                if (prop.GetCustomAttributes<ParameterNameAttribute>().FirstOrDefault() != null)
                {
                    if (!string.IsNullOrEmpty(Convert.ToString(prop.GetValue(item))) && prop.PropertyType == typeof(string))
                        keyValuePairs.Add(prop.GetCustomAttributes<ParameterNameAttribute>().First().Name, Convert.ToString(prop.GetValue(item)));
                    if (prop.GetValue(item) != null && prop.PropertyType == typeof(int?))
                        keyValuePairs.Add(prop.GetCustomAttributes<ParameterNameAttribute>().First().Name, Convert.ToString(prop.GetValue(item)));
                    if (prop.GetValue(item) != null && prop.PropertyType == typeof(int?))
                        keyValuePairs.Add(prop.GetCustomAttributes<ParameterNameAttribute>().First().Name, Convert.ToString(prop.GetValue(item)));

                    if (prop.PropertyType == typeof(List<string>) && ((List<string>)prop.GetValue(item))?.Count > 0)
                        keyValuePairs.Add(prop.GetCustomAttributes<ParameterNameAttribute>().First().Name, string.Join(",", ((List<string>)prop.GetValue((item))).Where(x => !string.IsNullOrEmpty(x))));

                }

            }
            return keyValuePairs;
        }
    }

}
