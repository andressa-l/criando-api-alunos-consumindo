using CriandoWebApiAlunos.Models;
using Microsoft.EntityFrameworkCore;

namespace CriandoWebApiAlunos.Context {
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        {
        }
        
        public DbSet<Aluno> Alunos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) 
        {
            modelBuilder.Entity<Aluno>().HasData(
                new Aluno {
                    Id = 1,
                    Nome = "Joana Darc da Penha",
                    Email = "joana.penha_darc@yahoo.com",
                    Idade = 15
                },
                new Aluno {
                    Id = 2,
                    Nome = "Fernando Luís de Lima",
                    Email = "fernando.luislima@yahoo.com",
                    Idade = 17
                },
                new Aluno {
                    Id = 3,
                    Nome = "Mariana Silva Santos",
                    Email = "mariana.silva.santos@gmail.com",
                    Idade = 16
                },
                new Aluno {
                    Id = 4,
                    Nome = "Pedro Henrique Oliveira",
                    Email = "pedro.henrique.oliveira@hotmail.com",
                    Idade = 18
                },
                new Aluno {
                    Id = 5,
                    Nome = "Ana Clara Souza",
                    Email = "ana.clara.souza@outlook.com",
                    Idade = 15
                },
                new Aluno {
                    Id = 6,
                    Nome = "Bruno César Costa",
                    Email = "bruno.cesar.costa@uol.com.br",
                    Idade = 19
                },
                new Aluno {
                    Id = 7,
                    Nome = "Julia Martins Rocha",
                    Email = "julia.martins.rocha@gmail.com",
                    Idade = 16
                },
                new Aluno {
                    Id = 8,
                    Nome = "Rafaela Dias Ferreira",
                    Email = "rafaela.dias.ferreira@hotmail.com",
                    Idade = 15
                },
                new Aluno {
                    Id = 9,
                    Nome = "Lucas Gabriel Souza",
                    Email = "lucas.gabriel.souza@outlook.com",
                    Idade = 18
                },
                new Aluno {
                    Id = 10,
                    Nome = "Gabriela Lima Santos",
                    Email = "gabriela.lima.santos@yahoo.com",
                    Idade = 17
                }

            );
        }
    }
}
