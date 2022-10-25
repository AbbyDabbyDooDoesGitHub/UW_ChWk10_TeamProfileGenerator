// The first class is an `Employee` parent class with the following properties and methods:
// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`
// In addition to `Employee`'s properties and methods, `Manager` will also have the following:
// * `officeNumber`
// * `getRole()`&mdash;overridden to return `'Manager'`

const Manager = require("../lib/manager");

const testEmployee = new Manager ("Tester McTestFace", "1234", "Tester@Gmail.com","999.999.9999");

describe("Manager Constructor", () => {
    it("should return the manager name", () => {
      expect(testEmployee.getName()).toBe("Tester McTestFace");
    });

    it("should return the manager id", () => {
        expect(testEmployee.getId()).toBe("1234");
    });

    it("should return the manager email", () => {
        expect(testEmployee.getEmail()).toBe("Tester@Gmail.com");
    });

    it("should return the manager role", () => {
        expect(testEmployee.getRole()).toBe("Manager");
    });

    it("should return the manager's office number", () => {
        expect(testEmployee.getOfficeNumber()).toBe("999.999.9999");
    });
  
});