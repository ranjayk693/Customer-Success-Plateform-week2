using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Promact.CustomerSuccess.Platform.Migrations
{
    /// <inheritdoc />
    public partial class addingPhaseMileStone : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "PhaseMilestones");

            migrationBuilder.RenameColumn(
                name: "EndDate",
                table: "PhaseMilestones",
                newName: "RevisedCompletionDate");

            migrationBuilder.AddColumn<DateTime>(
                name: "ApprovalDate",
                table: "PhaseMilestones",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "CompletionDate",
                table: "PhaseMilestones",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ApprovalDate",
                table: "PhaseMilestones");

            migrationBuilder.DropColumn(
                name: "CompletionDate",
                table: "PhaseMilestones");

            migrationBuilder.RenameColumn(
                name: "RevisedCompletionDate",
                table: "PhaseMilestones",
                newName: "EndDate");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "PhaseMilestones",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
