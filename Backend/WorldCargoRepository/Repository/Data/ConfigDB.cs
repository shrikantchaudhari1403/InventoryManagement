using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorldCargoRepository.Repository.Data
{
    public class ConfigDB
    {
        private string _connectionString;
        public ConfigDB(string connectionString)
        {
            _connectionString = connectionString;
        }

        public static DataSet query(string connectionString, string sql, List<SqlParameter> parameters)
        {
            SqlDataAdapter sqlDataAdapter;
            DataSet dataSet;
            try
            {
                using (SqlConnection sqlConnection = new SqlConnection(connectionString))
                {
                    using (SqlCommand command = new SqlCommand())
                    {
                        sqlConnection.Open();
                        command.CommandType = CommandType.StoredProcedure;
                        command.CommandTimeout = 900;
                        command.Connection = sqlConnection;
                        command.CommandText = sql;

                        foreach (SqlParameter parameter in parameters)
                        {
                            command.Parameters.Add(parameter);
                        }

                        sqlDataAdapter = new SqlDataAdapter();
                        sqlDataAdapter.SelectCommand = command;

                        dataSet = new DataSet();
                        sqlDataAdapter.Fill(dataSet);
                        sqlDataAdapter.Dispose();
                        command.Parameters.Clear();

                    }

                }
                return dataSet;

            }
            catch (OutOfMemoryException ex)
            {
                return null;
            }
        }

        public static DataSet querySingleParam(string connectionString, string sql, SqlParameter parameter)
        {
            SqlDataAdapter sqlDataAdapter;
            DataSet dataSet;
            try
            {
                using (SqlConnection sqlConnection = new SqlConnection(connectionString))
                {
                    using (SqlCommand command = new SqlCommand())
                    {
                        sqlConnection.Open();
                        command.CommandType = CommandType.StoredProcedure;
                        command.CommandTimeout = 900;
                        command.Connection = sqlConnection;
                        command.CommandText = sql;


                        command.Parameters.Add(parameter);


                        sqlDataAdapter = new SqlDataAdapter();
                        sqlDataAdapter.SelectCommand = command;

                        dataSet = new DataSet();
                        sqlDataAdapter.Fill(dataSet);
                        sqlDataAdapter.Dispose();
                        command.Parameters.Clear();
                    }

                }
                return dataSet;

            }
            catch (OutOfMemoryException ex)
            {
                return null;
            }
        }

        public static DataSet queryDataReader(string connectionString, string sql, List<SqlParameter> parameters)
        {
            DataSet dataSet = new DataSet();
            try
            {
                using (SqlConnection sqlConnection = new SqlConnection(connectionString))
                {
                    using (SqlCommand command = new SqlCommand())
                    {
                        sqlConnection.Open();
                        command.CommandType = CommandType.StoredProcedure;
                        command.CommandTimeout = 900;
                        command.Connection = sqlConnection;
                        command.CommandText = sql;

                        foreach (SqlParameter parameter in parameters)
                        {
                            command.Parameters.Add(parameter);
                        }

                        using (DbDataReader reader = command.ExecuteReader())
                        {
                            do
                            {
                                DataTable dt = new DataTable();
                                dt.Load(reader);
                                dataSet.Tables.Add(dt);

                            } while (!reader.IsClosed);
                        }
                        command.Parameters.Clear();
                    }

                }
                return dataSet;

            }
            catch (OutOfMemoryException ex)
            {
                return null;
            }
        }

        public static void ExecuteNonQuery(string connectionString, string sql, List<SqlParameter> parameters)
        {
            try
            {
                using (SqlConnection sqlConnection = new SqlConnection(connectionString))
                {
                    using (SqlCommand command = new SqlCommand())
                    {
                        sqlConnection.Open();
                        command.CommandType = CommandType.StoredProcedure;
                        command.CommandTimeout = 900;
                        command.Connection = sqlConnection;
                        command.CommandText = sql;

                        foreach (SqlParameter parameter in parameters)
                        {
                            command.Parameters.Add(parameter);
                        }

                        command.ExecuteNonQuery();

                    }

                }

            }
            catch (OutOfMemoryException ex)
            {
            }
        }

    }
}
