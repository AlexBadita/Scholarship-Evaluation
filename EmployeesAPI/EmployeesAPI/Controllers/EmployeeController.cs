using EmployeesAPI.Models;
using EmployeesAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        IEmployeeCollectionService _employeeCollectionService;

        public EmployeeController(IEmployeeCollectionService employeeCollectionService)
        {
            _employeeCollectionService = employeeCollectionService ?? throw new ArgumentNullException(nameof(employeeCollectionService));
        }

        /// <summary>
        ///     Returns a list of employees
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetEmployees()
        {
            List<Employee> employees = await _employeeCollectionService.GetAll();
            return Ok(employees);
        }

        /// <summary>
        ///     Create an employee
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> CreateEmployee([FromBody] Employee employee)
        {
            if (employee == null)
            {
                return BadRequest("Employee cannot be null!");
            }

            if (await _employeeCollectionService.Create(employee))
            {
                return Ok("Employee succesfully created!");
            }

            return NoContent();
        }

        /// <summary>
        ///     Get employee by id
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployeeById(Guid id)
        {
            Employee employee = await _employeeCollectionService.Get(id);
            if (employee == null)
            {
                return NoContent();
            }

            return Ok(employee);
        }

        /// <summary>
        ///     Update employee by id
        /// </summary>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(Guid id, [FromBody] Employee employee)
        {
            if (employee == null)
            {
                return BadRequest("Employee cannot be null!");
            }

            if (await _employeeCollectionService.Update(id, employee))
            {
                return Ok("Employee succesfully updated!");
            }

            return NotFound("Employee not found!");
        }

        /// <summary>
        ///     Delete employee by id
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(Guid id)
        {
            if (await _employeeCollectionService.Delete(id))
            {
                return NoContent();
            }

            return NotFound("Employee not found!");
        }
    }
}
