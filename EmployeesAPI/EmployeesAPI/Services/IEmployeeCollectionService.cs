using EmployeesAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeesAPI.Services
{
    public interface IEmployeeCollectionService : ICollectionService<Employee>
    {
    }
}
