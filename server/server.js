// note to self: do NOT put any code in the package.json. no notes or anything. 


// import faker and express 
const {faker} = require('@faker-js/faker');
const express = require('express');

// neeed to run and bring in express 
const app = express();
// claim your port and name it as a variable so if it changes you dont have to call it everywhere
const port = 8000; 


//CREATE A FUNCTION THAT CREATES A NEW USER. INCLUDE: fNAME, lNAME, PHONE, EMAIL, PW, ID
const newUserObj = () => ({
    id: faker.database.mongodbObjectId(),
    fName: faker.name.firstName(),
    lName: faker.name.lastName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password()
})


//CREATE A FUNCTION THAT CREATES A NEW COMPANY. INCLUDE: ID, NAME, ADDRESS (STREET, CITY, STATE, ZIP, COUNTRY)
//having parathesis around the curly bracket implies the return so you do not need to call it
const newCompanyObj = () => ({
    id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    address: {
        street: faker.address.street(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        country: faker.address.country()
    }
})


//CREATE A ROUTE THAT RETURNS A NEW USER
app.get("/user/new", (req, res) => {
    // platform teaches this: 
    const newUser = newUserObj();
    res.json(newUser);
    //this is the same thing
    //res.json(newUserObj());
})

//CREATE A ROUTE THAT RETURNS A NEW COMPANY
app.get("/company/new", (req, res) => {
    const newCompany = newCompanyObj();
    res.json(newCompany);
})

//CREATE A ROUTE THAT RETURNS A BOTH A NEW USER AND A NEW COMPANY
app.get("/user/company", (req, res) => {
    // option 1
    res.json({user: newUserObj(), company: newCompanyObj()});
    //option 2
    //const newUser = newUserObj();
    //const newCo = newCompanyObj()
    //const combined = {user: newUserObj, company: newCompanyObj}
    //res.json({user: newUserObj(), company: newCompanyObj();})
})


// need to add app.listen and give it your port. BACK TICKS!!!! 
app.listen(port, () => console.log(`Listening on port: ${port}`));


