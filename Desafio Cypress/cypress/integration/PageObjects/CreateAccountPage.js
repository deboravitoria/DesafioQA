/// <reference types="Cypress" />

class CreateAccountPage {
  fillGender(){
    const gender = cy.get('[id=id_gender2]')
    gender.click()
    return this
  }
  fillFirstName(firstName){
    const firstNameField = cy.get('[id=customer_firstname]')
    firstNameField.clear()
    firstNameField.type(firstName)
    return this
  }
  fillLastName(lastName){
    const lastNameField = cy.get('[id=customer_lastname]')
    lastNameField.clear()
    lastNameField.type(lastName)
    return this
  }
  fillPassword(password){
    const passwordField = cy.get('[id=passwd]')
    passwordField.clear()
    passwordField.type(password)
    return this
  }
  fillCompany(company){
    const companyField = cy.get('[id=company')
    companyField.clear()
    companyField.type(company)
    return this
  }
  fillAddress(address){
    const addressField = cy.get('[id=address1')
    addressField.clear()
    addressField.type(address)
    return this
  }
  fillCity(city){
    const cityField = cy.get('[id=city')
    cityField.clear()
    cityField.type(city)
    return this
  }
  fillState(){
    const stateField = cy.get('[id=id_state]')
    stateField.select('Alabama')
    return this
  }
  fillCep(cep){
    const cepField = cy.get('[id=postcode')
    cepField.clear()
    cepField.type(cep)
    return this
  }
  fillCountry(){
    const countryField = cy.get('[id=id_country]')
    countryField.select('United States')
    return this
  }
  fillMobilePhone(phone){
    const phoneField = cy.get('[id=phone_mobile')
    phoneField.clear()
    phoneField.type(phone)
    return this
  }
  submit(){
    const button = cy.get('[id=submitAccount]')
    button.click()
  }
}
export default CreateAccountPage