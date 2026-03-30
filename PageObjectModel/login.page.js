class LoginPage {

constructor(page){
    this.username = page.locator('input[name="user_name"]')
    this.password = page.locator('input[name="user_password"]')
    this.loginBtn = page.locator('#submitButton')
    //eng2 - Engineer2
}

}

export default LoginPage