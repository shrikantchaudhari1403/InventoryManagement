using WorldCargoRepository.Models;
using WorldCargoHelpers;
using WorldCargoRepository.Repository.Interface;
using WorldCargoRepository.Repository.ConcreteClass;

namespace WorldCargoRepository.Wrapper
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private WorldCargoDBContext _repoContext;
        private IProfitShipment profitShipment;
        private IAuthUser authUser;
        private IOceanExportData exportHblData;

        public RepositoryWrapper() {
            _repoContext = new WorldCargoDBContext(Appconfigurations.ConnectionString);
        }  

        public IProfitShipment ProfitShipment
        {
            get
            {
                if(profitShipment == null)
                {
                    profitShipment =new ProfitShipment(_repoContext);
                }
                return profitShipment;
            }
        }

        public IAuthUser AuthUser
        {
            get
            {
                if (authUser == null)
                {
                   authUser= new AuthUser(_repoContext);
                }
                return authUser;
            }
        }

        public IOceanExportData OceanExportData
        {
            get
            {
                if (exportHblData == null)
                {
                    exportHblData = new OceanExportData(_repoContext);
                }
                return exportHblData;
            }
        }


        public void Save()
        {
            _repoContext.SaveChanges();
        }
    }
}
