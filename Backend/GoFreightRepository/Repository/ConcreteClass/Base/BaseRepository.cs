using GoFreightRepository.Models;
using GoFreightRepository.Repository.Interface.Base;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace GoFreightRepository.Repository.ConcreteClass.Base
{
    public abstract class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        protected GoFreightDBContext RepositoryContext { get; set; }
        public BaseRepository(GoFreightDBContext repositoryContext)
        {
            RepositoryContext = repositoryContext;
        }

        public IQueryable<T> FindAll() => RepositoryContext.Set<T>().AsNoTracking();

        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression)
         => RepositoryContext.Set<T>().Where(expression).AsNoTracking();

        public void Create(T entity)
        => RepositoryContext.Set<T>().Add(entity);

        public void Update(T entity) => RepositoryContext.Update(entity);
        public void Delete(T entity) => RepositoryContext.Remove(entity);

    }
}
