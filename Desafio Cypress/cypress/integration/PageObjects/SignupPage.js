/// <reference types="Cypress" />

class SignupPage {
  visit(){
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
  }
  fillEmailAddress(email){
    const emailField = cy.get('[id=email_create]')
    emailField.clear()
    emailField.type(email)
    return this
  }
  submit(){
    const button = cy.get('[id=SubmitCreate]')
    button.click()
  }
}
export default SignupPage