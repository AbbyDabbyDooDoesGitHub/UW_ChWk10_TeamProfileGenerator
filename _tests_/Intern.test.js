// The first class is an `Employee` parent class with the following properties and methods:
// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`
// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
// * `school`
// * `getSchool()`
// * `getRole()`&mdash;overridden to return `'Intern'`

const Intern = require("../lib/intern");

const testEmployee = new Intern ("Tester McTestFace", "1234", "Tester@Gmail.com","School Name");

describe("Intern Constructor", () => {
    it("should return the intern name", () => {
      expect(testEmployee.getName()).toBe("Tester McTestFace");
    });

    it("should return the intern id", () => {
        expect(testEmployee.getId()).toBe("1234");
    });

    it("should return the intern email", () => {
        expect(testEmployee.getEmail()).toBe("Tester@Gmail.com");
    });

    it("should return the intern role", () => {
        expect(testEmployee.getRole()).toBe("Intern");
    });

    it("should return the intern's school", () => {
        expect(testEmployee.getSchool()).toBe("School Name");
    });
  
});