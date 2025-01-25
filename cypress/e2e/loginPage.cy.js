
import loginPage from "../support/pageObjects/loginPage"

describe('Login Page tests', () => {

    beforeEach(() => {
        cy.visitPage('login');
    })

    it('User should not be able to login with incorrect credentials.', () => {
        cy.fixture('user.json')
            .then((user) => {
                loginPage.enterUserName(user.invalidUser.userName);
                loginPage.enterPassword(user.invalidUser.password);
                loginPage.loginClick();
                loginPage.verifyErrorMessage(user.erroMessage.invaildLogin)
            })
    })

    it('User should login successfully with correct credentials.', () => {
        cy.fixture('user.json')
            .then((user) => {
                loginPage.enterUserName(user.validUser.userName);
                loginPage.enterPassword(user.validUser.password);
                loginPage.loginClick();
                loginPage.verifyLoginSuccess(user.validUser.userName)
            })
    })

})