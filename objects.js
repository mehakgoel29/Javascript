const employee = {
    name: "Mehak",
    printname: function () {   //method 1 to declare function inside object 
        console.log("Name=", this.name) // this represent "student.name"
    },

};

const empSalary = {
    salary: 5000,
    empId: "11222587",
    printid() {   //method 2 to declare function inside object 
        console.log("Employee id=", this.empId)
    }
}

employee.__proto__= empSalary
// if object and prototype have same method , object's method will be used 
