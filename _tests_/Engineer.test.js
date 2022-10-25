// The first class is an `Employee` parent class with the following properties and methods:
// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`
// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
// * `github`&mdash;GitHub username
// * `getGithub()`
// * `getRole()`&mdash;overridden to return `'Engineer'`

const Engineer = require("../lib/engineer");

const testEmployee = new Engineer ("Tester McTestFace", "1234", "Tester@Gmail.com","GitHubTag");

describe("Engineer Constructor", () => {
    it("should return the engineer name", () => {
      expect(testEmployee.getName()).toBe("Tester McTestFace");
    });

    it("should return the engineer id", () => {
        expect(testEmployee.getId()).toBe("1234");
    });

    it("should return the engineer email", () => {
        expect(testEmployee.getEmail()).toBe("Tester@Gmail.com");
    });

    it("should return the engineer role", () => {
        expect(testEmployee.getRole()).toBe("Engineer");
    });

    it("should return the engineer GitHub tag", () => {
        expect(testEmployee.getGitHub()).toBe("GitHubTag");
    });
  
});
  