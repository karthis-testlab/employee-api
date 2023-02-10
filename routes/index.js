const { Router } = require('express');
const router = Router();

const employees = [
    {id: 1, name: "Babu", status: "full-time"},
    {id: 2, name: "Haja", status: "part-time"},
    {id: 3, name: "Krish", status: "on-contract"},
    {id: 4, name: "Karthikeyan", status: "part-time"}
]

router.get('/employees', (req, res) => {
    //logic to return the all employees
    res.status(200).send(employees);
});

router.get('/employee/:employeeId', (req, res) => {
    //logic to return the specific employee
    const empId = parseInt(req.params.employeeId);    
    if(isNaN(empId)) res.status(400).send({"error": "Bad Request", "message": "Employee Id is in-valid one"}); 
    const employee = employees.find(emp => emp.id === empId);
    if(!employee) res.status(404).send({"error": "Not Found", "message": "Employee record wasn't found"});
    res.status(200).send(employee);
});

router.post('/employee/add', (req, res) => {
    //logic to add the new employee
    if(!req.body.name) res.status(400).send({"error": "Bad Request", "message": "The employee name is mandatory"});
    const newEmployee = {
        id: employees.length+1,
        name: req.body.name,
        status: req.body.status
    };
    employees.push(newEmployee);
    res.status(201).send({"status": "OK", "message": "New employee record was created"});
});

module.exports = router;