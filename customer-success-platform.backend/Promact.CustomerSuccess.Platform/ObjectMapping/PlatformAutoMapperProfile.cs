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
    }
}
