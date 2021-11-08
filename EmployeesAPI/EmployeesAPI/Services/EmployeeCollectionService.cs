using EmployeesAPI.Models;
using EmployeesAPI.Settings;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeesAPI.Services
{
    public class EmployeeCollectionService : IEmployeeCollectionService
    {
        private readonly IMongoCollection<Employee> _employees;

        public EmployeeCollectionService(IMongoDBSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _employees = database.GetCollection<Employee>(settings.EmployeeCollectionName);
        }

        public async Task<List<Employee>> GetAll()
        {
            var result = await _employees.FindAsync(note => true);
            return result.ToList();
        }

        public async Task<bool> Create(Employee employee)
        {
            await _employees.InsertOneAsync(employee);
            return true;
        }

        public async Task<bool> Delete(Guid id)
        {
            var result = await _employees.DeleteOneAsync(employee => employee.Id == id);
            if (!result.IsAcknowledged && result.DeletedCount == 0)
            {
                return false;
            }
            return true;
        }

        public async Task<Employee> Get(Guid id)
        {
            return (await _employees.FindAsync(employee => employee.Id == id)).FirstOrDefault();
        }

        public async Task<bool> Update(Guid id, Employee employee)
        {
            employee.Id = id;
            var result = await _employees.ReplaceOneAsync(note => note.Id == id, employee);
            if (!result.IsAcknowledged && result.ModifiedCount == 0)
            {
                await _employees.InsertOneAsync(employee);
                return false;
            }
            return true;
        }
    }
}
