// Write your solution in this file!
// DO NOT remove or rename `employee`
const employee = {};

// NON-DESTRUCTIVE: returns a new object
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

// DESTRUCTIVE: modifies original employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// NON-DESTRUCTIVE: returns a new object without the key
function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// DESTRUCTIVE: removes key from original employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
