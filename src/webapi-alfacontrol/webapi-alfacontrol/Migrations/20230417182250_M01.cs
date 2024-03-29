﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapi_alfacontrol.Migrations
{
    /// <inheritdoc />
    public partial class M01 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
           

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Cpf = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Senha = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Tipo = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Cpf);
                });

          
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
          

            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
