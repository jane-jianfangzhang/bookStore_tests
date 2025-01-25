class loginPage{
    get userNameElement(){
       return cy.get('#userName');
    }
 
    get passwordElement(){
       return cy.get('#password');
    }
 
    get loginButton(){
       return cy.get('#login');
    }

    get errorMessage(){
        return cy.get('#name')
    }

    get userInfoAfterLogin(){
        return cy.get('#userName-value')
    }

    enterUserName(userName){
        this.userNameElement.clear();
        this.userNameElement.type(userName);
    }
    enterPassword(password){
        this.passwordElement.clear();
        this.passwordElement.type(password);
    }

    loginClick(){
        this.loginButton.click();
    }

    //Verify login failed
    verifyErrorMessage(expectedErrMessage){
        this.errorMessage.should('have.text', expectedErrMessage)
    }

    //Verify login success
    verifyLoginSuccess(userLoginName){
        this.userInfoAfterLogin.should('have.text',userLoginName)
    }
 
 }

 export default new loginPage();