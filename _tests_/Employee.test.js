// The first class is an `Employee` parent class with the following properties and methods:
// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`

const Employee = require("../lib/employee");

const testEmployee = new Employee ("Tester McTestFace", "1234", "Tester@Gmail.com");

describe("Employee Constructor", () => {
    it("should return the employee name", () => {
      expect(testEmployee.getName()).toBe("Tester McTestFace");
    });

    it("should return the employee id", () => {
        expect(testEmployee.getId()).toBe("1234");
    });

    it("should return the employee email", () => {
        expect(testEmployee.getEmail()).toBe("Tester@Gmail.com");
    });

    it("should return the employee role", () => {
        expect(testEmployee.getRole()).toBe("Employee");
    });
  
});
  