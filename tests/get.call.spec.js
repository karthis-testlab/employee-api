const request = require("supertest");
const expect = require("chai").expect;

describe("Test suite for the employess api get call", () => {

    it("Validate the employees should able to get all records", () => {
        request("http://localhost:3000")
        .get("/v1/api/employees")
        .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.not.be.empty;
            expect(res.body.length).to.be.greaterThan(0);
        });
    });

    it("Validate the specific employee record from employees api", () => {
        request("http://localhost:3000")
        .get("/v1/api/employee/1")
        .end((err, res) => {
            expect(res.status).to.equal(200);            
            expect(res.body.id).to.be.equal(1);
            expect(res.body.name).to.be.equal("Babu");
            expect(res.body.status).to.be.equal("full-time");
        });
    });

    it("Validate the employees api get call response with un-kown employee id", () => {
        request("http://localhost:3000")
        .get("/v1/api/employee/15")
        .end((err, res) => {
            expect(res.status).to.equal(404);            
            expect(res.body.error).to.be.equal("Not Found");
            expect(res.body.message).to.be.equal("Employee record wasn't found");
        });
    });

    it("Validate the employees api get call response with in-valid employee id", () => {
        request("http://localhost:3000")
        .get("/v1/api/employee/tqw")
        .end((err, res) => {
            expect(res.status).to.equal(400);            
            expect(res.body.error).to.be.equal("Bad Request");
            expect(res.body.message).to.be.equal("Employee Id is in-valid one");
        });
    });

});