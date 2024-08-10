using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace GoFreightRepository.Models
{
    public partial class GoFreightDBContext : DbContext
    {
        readonly string _connectionString;

        public GoFreightDBContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        public GoFreightDBContext(DbContextOptions<GoFreightDBContext> dbContextOptions) : base(dbContextOptions)
        {

        }

        public virtual DbSet<NegativeProfitShipment> NegativeProfitShipments { get; set; }

        public virtual DbSet<UserProfile> UserProfiles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer(_connectionString);

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<NegativeProfitShipment>(entity =>
            {
                entity.ToTable("NegativeProfitShipmentTbl", "dbo");
                entity.HasKey(e => e.Id).HasName("Id");
                entity.Property(e => e.Id).HasColumnName("Id");
                entity.Property(e => e.MawbNo).HasColumnName("MawbNo");
                entity.Property(e => e.FileNo).HasColumnName("FileNo");
                entity.Property(e => e.Profit).HasColumnName("Profit");
                entity.Property(e => e.CreatedBy).HasColumnName("CreatedBy");
                entity.Property(e => e.CreatedDate).HasColumnName("CreatedDate");
            });

            modelBuilder.Entity<UserProfile>(entity =>
            {
                entity.ToTable("UserProfile", "dbo");
                entity.HasKey(e => e.Id).HasName("Id");
                entity.Property(e => e.Id).HasColumnName("Id");
                entity.Property(e => e.FullName).HasColumnName("FullName");
                entity.Property(e => e.Email).HasColumnName("Email");
                entity.Property(e => e.CreatedBy).HasColumnName("CreatedBy");
                entity.Property(e => e.CreatedDate).HasColumnName("CreatedDate");
                entity.Property(e => e.IsAuthenticated).HasColumnName("IsAuthenticate");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }


}

