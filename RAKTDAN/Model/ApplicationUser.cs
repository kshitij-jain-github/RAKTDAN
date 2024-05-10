using Microsoft.AspNetCore.Identity;

namespace RAKTDAN.Model
{
    public class ApplicationUser:IdentityUser
    {
        public string Full_Name { get; set; }
        public string Blood_group { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Country { get; set; } 
        public string Phone { get; set; }   
        public string PostalCode { get; set; }  
        public string Address { get; set; }
 
    }
}
