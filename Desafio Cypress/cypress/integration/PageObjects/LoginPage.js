/// <reference types="Cypress" />

class LoginPage {

  visit(){
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
  }
  fillEmailAddress(email){
    const emailField = cy.get('[id=email]')
    emailField.clear()
    emailField.type(email)
    return this
  }
  fillPassword(password){
    const passwordField = cy.get('[id=passwd]')
    passwordField.clear()
    passwordField.type(password)
    return this
  }
  submit(){
    const button = cy.get('[id=SubmitLogin]')
    button.click()
  }
}
export default LoginPage