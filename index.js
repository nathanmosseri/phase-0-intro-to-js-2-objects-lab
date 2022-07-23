const employee = {name: '', streetAddress: ''}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const newObj = {...employee}
    newObj[key] = value
    return newObj
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value
    return employee
    
}

const deleteFromEmployeeByKey = (employee, key) => {
    const newObj = {...employee}
    delete newObj[key]
    return newObj
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]
    return employee
}


