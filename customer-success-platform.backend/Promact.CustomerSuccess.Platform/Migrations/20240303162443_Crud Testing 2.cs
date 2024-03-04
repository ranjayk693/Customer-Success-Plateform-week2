using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Promact.CustomerSuccess.Platform.Migrations
{
    /// <inheritdoc />
    public partial class CrudTesting2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ConcurrencyStamp",
                table: "Resources",
                type: "character varying(40)",
                maxLength: 40,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ExtraProperties",
                table: "Resources",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ConcurrencyStamp",
                table: "ProjectUpdate",
                type: "character varying(40)",
                maxLength: 40,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ExtraProperties",
                table: "ProjectUpdate",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ConcurrencyStamp",
                table: "ApprovedTeam",
                type: "character varying(40)",
                maxLength: 40,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ExtraProperties",
                table: "ApprovedTeam",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectUpdate_ProjectId",
                table: "ProjectUpdate",
                column: "ProjectId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectUpdate_Projects_ProjectId",
                table: "ProjectUpdate",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProjectUpdate_Projects_ProjectId",
                table: "ProjectUpdate");

            migrationBuilder.DropIndex(
                name: "IX_ProjectUpdate_ProjectId",
                table: "ProjectUpdate");

            migrationBuilder.DropColumn(
                name: "ConcurrencyStamp",
                table: "Resources");

            migrationBuilder.DropColumn(
                name: "ExtraProperties",
                table: "Resources");

            migrationBuilder.DropColumn(
                name: "ConcurrencyStamp",
                table: "ProjectUpdate");

            migrationBuilder.DropColumn(
                name: "ExtraProperties",
                table: "ProjectUpdate");

            migrationBuilder.DropColumn(
                name: "ConcurrencyStamp",
                table: "ApprovedTeam");

            migrationBuilder.DropColumn(
                name: "ExtraProperties",
                table: "ApprovedTeam");
        }
    }
}
