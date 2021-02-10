/// <reference types="Cypress" />

import LoginPage from '../PageObjects/LoginPage'

describe('Login test', function(){

  it('Blank login', function(){
    const login = new LoginPage()
    login.visit()
    login.submit()
    cy.get('#center_column > :nth-child(2) > p').contains('there is 1 error', { matchCase: false }) //testando erro da página para validar se o login falhou
    cy.get('ol > li').contains('An email address required.', { matchCase: false }) //testando se a mensagem de erro ao efetuar login está correta

  })

  it('Invalid login test', function(){
    const login = new LoginPage()
    login.visit()
    login.fillEmailAddress(`${Cypress.env('invalidEmail')}`)
    login.fillPassword(`${Cypress.env('password')}`)
    login.submit()
    cy.get('#center_column > :nth-child(2) > p').contains('there is 1 error', { matchCase: false }) //testando erro da página para validar se o login falhou
    cy.get('ol > li').contains('Invalid email address.', { matchCase: false }) //testando se a mensagem de erro ao efetuar login está correta
  })

  it('Valid login test', function(){
    const login = new LoginPage()
    login.visit()
    login.fillEmailAddress(`${Cypress.env('email')}`)
    login.fillPassword(`${Cypress.env('password')}`)
    login.submit()
    cy.get('.page-heading').contains('MY ACCOUNT', { matchCase: false }) //testando título da página para validar se o login foi feito com sucesso
  })
})