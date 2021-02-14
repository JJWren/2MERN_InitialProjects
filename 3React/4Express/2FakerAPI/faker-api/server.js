const express = require("express");
const app = express();
const port = 8000;
var faker = require("faker");

class User{
    constructor(){
        this._id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zipCode: faker.address.zipCodeByState(),
            country: faker.address.country()
        }
    }
}

// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => {
    const newUser = new User();
    res.json({ user: newUser });
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company();
    res.json({ company: newCompany });
});

app.get("/api/user/company", (req, res) => {
    const newUser = new User();
    const newCompany = new Company();
    res.json({ 
        company: newCompany,
        user: newUser
    });
});

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );