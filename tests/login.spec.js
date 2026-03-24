import { test, expect } from '@playwright/test'

import LoginPage from '../PageObjectModel/login.page.js'
import logindata from '../testData/logindata.json' 
test('Create Lead Test', async ({page})=>{

await page.goto(logindata.url)

const login = new LoginPage(page)
await login.username.fill(logindata.username)
await login.password.fill(logindata.password)
await login.loginBtn.click()
})