/// <reference types="Cypress" />

import CreateAccountPage from '../PageObjects/CreateAccountPage'
import SignupPage from '../PageObjects/SignupPage' 

describe('Signup test', function(){

  it('Valid signup test', function(){
    const signup = new SignupPage()
    signup.visit()
    signup.fillEmailAddress(`${Cypress.env('email')}`)
    signup.submit()
  })
  it('Create account test', function(){
    const createAccount = new CreateAccountPage()
    createAccount.fillGender()
    createAccount.fillFirstName(`${Cypress.env('firstName')}`)
    createAccount.fillLastName(`${Cypress.env('lastName')}`)
    createAccount.fillPassword(`${Cypress.env('password')}`)
    createAccount.fillCompany('4intelligence')
    createAccount.fillAddress('Av. João de Camargo, 510 - Centro')
    createAccount.fillCity('Santa Rita do Sapucaí')    
    createAccount.fillState()
    createAccount.fillCep('00000')
    createAccount.fillCountry()
    createAccount.fillMobilePhone('035945711858')
    createAccount.submit()
  })
})