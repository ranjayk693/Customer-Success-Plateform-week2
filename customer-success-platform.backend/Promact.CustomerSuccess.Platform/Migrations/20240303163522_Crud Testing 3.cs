using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Promact.CustomerSuccess.Platform.Migrations
{
    /// <inheritdoc />
    public partial class CrudTesting3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClientFeedbacks_Projects_ProjectId",
                table: "ClientFeedbacks");

            migrationBuilder.DropForeignKey(
                name: "FK_Documents_Projects_ProjectId",
                table: "Documents");

            migrationBuilder.DropForeignKey(
                name: "FK_EscalationMatrices_Projects_ProjectId",
                table: "EscalationMatrices");

            migrationBuilder.DropForeignKey(
                name: "FK_MeetingMinutes_Projects_ProjectId",
                table: "MeetingMinutes");

            migrationBuilder.DropForeignKey(
                name: "FK_PhaseMilestones_Projects_ProjectId",
                table: "PhaseMilestones");

            migrationBuilder.DropForeignKey(
                name: "FK_ProjectBudgets_Projects_ProjectId",
                table: "ProjectBudgets");

            migrationBuilder.DropForeignKey(
                name: "FK_ProjectResources_Projects_ProjectId",
                table: "ProjectResources");

            migrationBuilder.DropForeignKey(
                name: "FK_ProjectUpdate_Projects_ProjectId",
                table: "ProjectUpdate");

            migrationBuilder.DropForeignKey(
                name: "FK_RiskProfiles_Projects_ProjectId",
                table: "RiskProfiles");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProjectUpdate",
                table: "ProjectUpdate");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Projects",
                table: "Projects");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ApprovedTeam",
                table: "ApprovedTeam");

            migrationBuilder.RenameTable(
                name: "ProjectUpdate",
                newName: "ProjectUpdates");

            migrationBuilder.RenameTable(
                name: "Projects",
                newName: "Project");

            migrationBuilder.RenameTable(
                name: "ApprovedTeam",
                newName: "approvedTeams");

            migrationBuilder.RenameIndex(
                name: "IX_ProjectUpdate_ProjectId",
                table: "ProjectUpdates",
                newName: "IX_ProjectUpdates_ProjectId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProjectUpdates",
                table: "ProjectUpdates",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Project",
                table: "Project",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_approvedTeams",
                table: "approvedTeams",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ClientFeedbacks_Project_ProjectId",
                table: "ClientFeedbacks",
                column: "ProjectId",
                principalTable: "Project",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Documents_Project_ProjectId",
                table: "Documents",
                column: "ProjectId",
                principalTable: "Project",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_EscalationMatrices_Project_ProjectId",
                table: "EscalationMatrices",
                column: "ProjectId",
                principalTable: "Project",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MeetingMinutes_Project_ProjectId",
                table: "MeetingMinutes",
                column: "ProjectId",
                principalTable: "Project",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PhaseMilestones_Project_ProjectId",
                table: "PhaseMilestones",
                column: "ProjectId",
                principalTable: "Project",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectBudgets_Project_ProjectId",
                table: "ProjectBudgets",
                column: "ProjectId",
                principalTable: "Project",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectResources_Project_ProjectId",
                table: "ProjectResources",
                column: "ProjectId",
                principalTable: "Project",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectUpdates_Project_ProjectId",
                table: "ProjectUpdates",
                column: "ProjectId",
                principalTable: "Project",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RiskProfiles_Project_ProjectId",
                table: "RiskProfiles",
                column: "ProjectId",
                principalTable: "Project",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClientFeedbacks_Project_ProjectId",
                table: "ClientFeedbacks");

            migrationBuilder.DropForeignKey(
                name: "FK_Documents_Project_ProjectId",
                table: "Documents");

            migrationBuilder.DropForeignKey(
                name: "FK_EscalationMatrices_Project_ProjectId",
                table: "EscalationMatrices");

            migrationBuilder.DropForeignKey(
                name: "FK_MeetingMinutes_Project_ProjectId",
                table: "MeetingMinutes");

            migrationBuilder.DropForeignKey(
                name: "FK_PhaseMilestones_Project_ProjectId",
                table: "PhaseMilestones");

            migrationBuilder.DropForeignKey(
                name: "FK_ProjectBudgets_Project_ProjectId",
                table: "ProjectBudgets");

            migrationBuilder.DropForeignKey(
                name: "FK_ProjectResources_Project_ProjectId",
                table: "ProjectResources");

            migrationBuilder.DropForeignKey(
                name: "FK_ProjectUpdates_Project_ProjectId",
                table: "ProjectUpdates");

            migrationBuilder.DropForeignKey(
                name: "FK_RiskProfiles_Project_ProjectId",
                table: "RiskProfiles");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProjectUpdates",
                table: "ProjectUpdates");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Project",
                table: "Project");

            migrationBuilder.DropPrimaryKey(
                name: "PK_approvedTeams",
                table: "approvedTeams");

            migrationBuilder.RenameTable(
                name: "ProjectUpdates",
                newName: "ProjectUpdate");

            migrationBuilder.RenameTable(
                name: "Project",
                newName: "Projects");

            migrationBuilder.RenameTable(
                name: "approvedTeams",
                newName: "ApprovedTeam");

            migrationBuilder.RenameIndex(
                name: "IX_ProjectUpdates_ProjectId",
                table: "ProjectUpdate",
                newName: "IX_ProjectUpdate_ProjectId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProjectUpdate",
                table: "ProjectUpdate",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Projects",
                table: "Projects",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ApprovedTeam",
                table: "ApprovedTeam",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ClientFeedbacks_Projects_ProjectId",
                table: "ClientFeedbacks",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Documents_Projects_ProjectId",
                table: "Documents",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_EscalationMatrices_Projects_ProjectId",
                table: "EscalationMatrices",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MeetingMinutes_Projects_ProjectId",
                table: "MeetingMinutes",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PhaseMilestones_Projects_ProjectId",
                table: "PhaseMilestones",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectBudgets_Projects_ProjectId",
                table: "ProjectBudgets",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectResources_Projects_ProjectId",
                table: "ProjectResources",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectUpdate_Projects_ProjectId",
                table: "ProjectUpdate",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RiskProfiles_Projects_ProjectId",
                table: "RiskProfiles",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
