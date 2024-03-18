using AutoMapper;
using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;

namespace Promact.CustomerSuccess.Platform.ObjectMapping;

public class PlatformAutoMapperProfile : Profile
{
    public PlatformAutoMapperProfile()
    {
        /* Create your AutoMapper object mappings here */
        CreateMap<CreateProjectDto, Project>();
        CreateMap<UpdateProjectDto, Project>();
        CreateMap<Project, ProjectDto>().ReverseMap();

        /* Create your AutoMapper object mappings here  for ClientFeedback*/
        CreateMap<CreateClientFeedbackDto, ClientFeedback>();
        CreateMap<UpdateClientFeedbackDto, ClientFeedback>();
        CreateMap<ClientFeedback, ClientFeedbackDto>().ReverseMap();

        /* Create your AutoMapper object mappings here  for MeetingMinute*/
        CreateMap<CreateMeetingMinuteDto, MeetingMinute>();
        CreateMap<UpdateMeetingMinuteDto, MeetingMinute>();
        CreateMap<MeetingMinute, MeetingMinuteDto>().ReverseMap();

        /* Create your AutoMapper object mappings here  for Resources*/
        CreateMap<CreateResourceDto, Resources>();
        CreateMap<UpdateResourceDto, Resources>();
        CreateMap<Resources, ResourcesDto>().ReverseMap();

        /* Create your AutoMapper object mappings here  for ProjectUpdate*/
        CreateMap<CreateProjectUpdateDto, ProjectUpdate>();
        CreateMap<UpdateProjectUpdateDto, ProjectUpdate>();
        CreateMap<ProjectUpdate, ProjectUpdateDto>().ReverseMap();

        /* Create your AutoMapper object mappings here  for ApproveTeam*/
        CreateMap<CreateApproveTeamDto, ApprovedTeam>();
        CreateMap<UpdateApproveDto, ApprovedTeam>();
        CreateMap<ApprovedTeam, ApproveTeamDto>().ReverseMap();

        /* Create your AutoMapper object mappings here  for RiskProfiling*/
        CreateMap<CreateRiskProfileDto, RiskProfile>();
        CreateMap<UpdateRiskProfileDto, RiskProfile>();
        CreateMap<RiskProfile, RiskProfileDto>().ReverseMap();

        /* Create your AutoMapper object mappings here  for PhaseMileStone*/
        CreateMap<CreatePhaseMilestoneDto, PhaseMilestone>();
        CreateMap<UpdatePhaseMilestoneDto, PhaseMilestone>();
        CreateMap<PhaseMilestone, PhaseMilestoneDto>().ReverseMap();

        /* Create your AutoMapper object mappings here  for Sprint*/
        CreateMap<CreateSprintDto, Sprint>();
        CreateMap<UpdateSprintDto, Sprint>();
        CreateMap<Sprint, SprintDto>().ReverseMap();

        /* Create your AutoMapper object mappings here  for ProjectBudget*/
        CreateMap<CreateProjectBudgetDto, ProjectBudget>();
        CreateMap<UpdateProjectBudgetDto, ProjectBudget>();
        CreateMap<ProjectBudget, ProjectBudgetDto>().ReverseMap();

        /* Create your AutoMapper object mappings here  for AuditHistory*/
        CreateMap<CreateAuditHistoryDto, AuditHistory>();
        CreateMap<UpdateAuditHistoryDto, AuditHistory>();
        CreateMap<AuditHistory, AuditHistoryDto>().ReverseMap();

        /* Create your AutoMapper object mappings here  for VersionHistory*/
        CreateMap<CreateVersionHistoryDto, VersionHistory>();
        CreateMap<UpdateVerionHistoryDto, VersionHistory>();
        CreateMap<VersionHistory, VersionHistoryDto>().ReverseMap();

        /* Create your AutoMapper object mappings here  for StakeHolder*/
        CreateMap<CreateStakeHolderDto, StakeHolder>();
        CreateMap<UpdateStakeHolderDto, StakeHolder>();
        CreateMap<StakeHolder, StakeHolderDto>().ReverseMap();

        /* Create your AutoMapper object mappings here  for RoleBased*/
        CreateMap<CreateRoleBasedDto, RoleBased>();
        CreateMap<UpdateRoleBasedDto, RoleBased>();
        CreateMap<RoleBased, RoleBasedDto>().ReverseMap();

        /* Create your AutoMapper object mappings here  for EmailValidator*/
        CreateMap<EmailValidateDto, EmailValidate>();
        CreateMap<EmailValidate, EmailValidateDto>().ReverseMap();
    }
}
