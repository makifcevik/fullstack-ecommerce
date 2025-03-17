using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder
            .Entity<Product>()
            .HasData(
                new List<Product>
                {
                    new Product
                    {
                        Id = 1,
                        Name = "Iphone 15",
                        Description = "Phone description",
                        ImageUrl = "1.jpg",
                        IsActive = true,
                        Price = 40000,
                        Stock = 120,
                    },
                    new Product
                    {
                        Id = 2,
                        Name = "Iphone 16",
                        Description = "Phone description",
                        ImageUrl = "2.jpg",
                        IsActive = false,
                        Price = 50000,
                        Stock = 95,
                    },
                    new Product
                    {
                        Id = 3,
                        Name = "Iphone 17",
                        Description = "Phone description",
                        ImageUrl = "3.jpg",
                        IsActive = true,
                        Price = 70000,
                        Stock = 80,
                    },
                    new Product
                    {
                        Id = 4,
                        Name = "Iphone 18",
                        Description = "Phone description",
                        ImageUrl = "4.jpg",
                        IsActive = true,
                        Price = 100000,
                        Stock = 250,
                    },
                    new Product
                    {
                        Id = 5,
                        Name = "Iphone 19",
                        Description = "Phone description",
                        ImageUrl = "5.jpg",
                        IsActive = true,
                        Price = 150000,
                        Stock = 20,
                    },
                }
            );
    }
}
