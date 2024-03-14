using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Promact.CustomerSuccess.Platform.Migrations
{
    /// <inheritdoc />
    public partial class projectbudgetisadded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Goals",
                table: "Sprints");

            migrationBuilder.DropColumn(
                name: "BudgetedCost",
                table: "ProjectBudgets");

            migrationBuilder.DropColumn(
                name: "ContractDuration",
                table: "ProjectBudgets");

            migrationBuilder.DropColumn(
                name: "Currency",
                table: "ProjectBudgets");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Goals",
                table: "Sprints",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "BudgetedCost",
                table: "ProjectBudgets",
                type: "double precision",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<int>(
                name: "ContractDuration",
                table: "ProjectBudgets",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Currency",
                table: "ProjectBudgets",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
