var employees = [];

function Employee(name, jobTitle, salary, status) {
	this.name = name;
	this.title = jobTitle;
	this.salary = salary;
	this.status = status || "Full Time";
	this.printEmployeeForm = function () {
		console.log("Name: " + this.name + ", " + "Job Title: " + this.title + ", " + "Salary: " + this.salary + ", " + "Status: " + this.status);
	}
}

employees[0] = new Employee("Jon", "Accountant", "56k");
employees[1] = new Employee("Alan", "Janitor", "30k", "Part Time");
employees[2] = new Employee("Jon", "CFO", "162k");

employees[0].printEmployeeForm();
employees[1].printEmployeeForm();
employees[2].printEmployeeForm();