const {Given, When, Then} = require("@cucumber/cucumber");
const request = require("supertest");
const expect = require("chai").expect;

let baseUrl;
let response;

Given('User is going to use the employee api endpoint url to fetch the information', function () {
    baseUrl = "http://localhost:3000";
});

When('If they hit or call the all information resource call using get method', async function () {
    response = await request(baseUrl).get("/v1/api/employees");
});

Then('They should able to view all the record information in the abc crop employees database', function () {
    expect(response.statusCode).to.be.equal(200);
    expect(response.body).to.not.be.empty;
    expect(response.body.length).to.be.greaterThan(0);
});