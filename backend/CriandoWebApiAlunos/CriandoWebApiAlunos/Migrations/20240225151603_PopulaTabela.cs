using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CriandoWebApiAlunos.Migrations
{
    public partial class PopulaTabela : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Alunos",
                columns: new[] { "Id", "Email", "Idade", "Nome" },
                values: new object[,]
                {
                    { 1, "joana.penha_darc@yahoo.com", 15, "Joana Darc da Penha" },
                    { 2, "fernando.luislima@yahoo.com", 17, "Fernando Luís de Lima" },
                    { 3, "mariana.silva.santos@gmail.com", 16, "Mariana Silva Santos" },
                    { 4, "pedro.henrique.oliveira@hotmail.com", 18, "Pedro Henrique Oliveira" },
                    { 5, "ana.clara.souza@outlook.com", 15, "Ana Clara Souza" },
                    { 6, "bruno.cesar.costa@uol.com.br", 19, "Bruno César Costa" },
                    { 7, "julia.martins.rocha@gmail.com", 16, "Julia Martins Rocha" },
                    { 8, "rafaela.dias.ferreira@hotmail.com", 15, "Rafaela Dias Ferreira" },
                    { 9, "lucas.gabriel.souza@outlook.com", 18, "Lucas Gabriel Souza" },
                    { 10, "gabriela.lima.santos@yahoo.com", 17, "Gabriela Lima Santos" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Alunos",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Alunos",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Alunos",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Alunos",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Alunos",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Alunos",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Alunos",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Alunos",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Alunos",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Alunos",
                keyColumn: "Id",
                keyValue: 10);
        }
    }
}
