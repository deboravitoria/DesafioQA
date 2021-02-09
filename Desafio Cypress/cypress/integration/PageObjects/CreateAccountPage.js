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
  selectBirthDate(){
    const dayField = cy.get('[id=days]')
    dayField.click()
    // const selectDay = cy.get('[id=]')
  }
  // submit(){
  //   const button = cy.get('[id=SubmitCreate]')
  //   button.click()
  // }
}
export default CreateAccountPage