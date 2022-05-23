namespace Api.Clients.Dtos
{
    public class ServiceResponse<T>
    {
        public ServiceResponse()
        {
            Status = Constants.ApiResponseStatus.Error;
        }

        public ServiceResponse(string status)
        {
            Status = status;
        }

        public string Status { get; set; }
        public IEnumerable<T> Data{ get; set; }
        public ErrorResponse Error { get; set; }
    }
}
