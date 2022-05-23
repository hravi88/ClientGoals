using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Api.Clients.Data.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    ClientId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FirstName = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    LastName = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    DateCreated = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.ClientId);
                });

            migrationBuilder.CreateTable(
                name: "Goals",
                columns: table => new
                {
                    GoalId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ClientId = table.Column<int>(type: "INTEGER", nullable: false),
                    Title = table.Column<string>(type: "TEXT", maxLength: 200, nullable: false),
                    Details = table.Column<string>(type: "TEXT", maxLength: 10000, nullable: false),
                    DateCreated = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Goals", x => x.GoalId);
                    table.ForeignKey(
                        name: "FK_Goals_Clients_ClientId",
                        column: x => x.ClientId,
                        principalTable: "Clients",
                        principalColumn: "ClientId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Clients",
                columns: new[] { "ClientId", "DateCreated", "FirstName", "LastName" },
                values: new object[] { 1, new DateTime(2022, 5, 21, 1, 48, 5, 414, DateTimeKind.Local).AddTicks(8792), "harsha 1", "ravi 1" });

            migrationBuilder.InsertData(
                table: "Clients",
                columns: new[] { "ClientId", "DateCreated", "FirstName", "LastName" },
                values: new object[] { 2, new DateTime(2022, 5, 21, 1, 48, 5, 414, DateTimeKind.Local).AddTicks(8823), "harsha 2", "ravi 2" });

            migrationBuilder.InsertData(
                table: "Clients",
                columns: new[] { "ClientId", "DateCreated", "FirstName", "LastName" },
                values: new object[] { 3, new DateTime(2022, 5, 21, 1, 48, 5, 414, DateTimeKind.Local).AddTicks(8827), "harsha 3", "ravi 3" });

            migrationBuilder.InsertData(
                table: "Clients",
                columns: new[] { "ClientId", "DateCreated", "FirstName", "LastName" },
                values: new object[] { 4, new DateTime(2022, 5, 21, 1, 48, 5, 414, DateTimeKind.Local).AddTicks(8830), "harsha 4", "ravi 4" });

            migrationBuilder.InsertData(
                table: "Goals",
                columns: new[] { "GoalId", "ClientId", "DateCreated", "Details", "Title" },
                values: new object[] { 1, 1, new DateTime(2022, 5, 21, 1, 48, 5, 414, DateTimeKind.Local).AddTicks(8836), "Details 1", "Title 1" });

            migrationBuilder.InsertData(
                table: "Goals",
                columns: new[] { "GoalId", "ClientId", "DateCreated", "Details", "Title" },
                values: new object[] { 2, 2, new DateTime(2022, 5, 21, 1, 48, 5, 414, DateTimeKind.Local).AddTicks(8841), "Details 2", "Title 1" });

            migrationBuilder.InsertData(
                table: "Goals",
                columns: new[] { "GoalId", "ClientId", "DateCreated", "Details", "Title" },
                values: new object[] { 3, 3, new DateTime(2022, 5, 21, 1, 48, 5, 414, DateTimeKind.Local).AddTicks(8844), "Details 3", "Title 1" });

            migrationBuilder.InsertData(
                table: "Goals",
                columns: new[] { "GoalId", "ClientId", "DateCreated", "Details", "Title" },
                values: new object[] { 4, 4, new DateTime(2022, 5, 21, 1, 48, 5, 414, DateTimeKind.Local).AddTicks(8848), "Details 4", "Title 1" });

            migrationBuilder.CreateIndex(
                name: "IX_Goals_ClientId",
                table: "Goals",
                column: "ClientId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Goals");

            migrationBuilder.DropTable(
                name: "Clients");
        }
    }
}
