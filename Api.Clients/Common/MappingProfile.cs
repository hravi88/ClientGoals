using AutoMapper;

namespace Api.Clients.Common
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<Data.Client, Dtos.ClientResponseDto>();

            CreateMap<Data.Goal, Dtos.GoalResponseDto>();

            CreateMap<Dtos.GoalRequestDto, Data.Goal>();
        }
    }
}
