import { test, expect } from '@playwright/test'

import LoginPage from '../PageObjectModel/login.page.js'
import loginData from '../testData/loginData.json' 
test('Create Lead Test', async ({page})=>{

await page.goto(loginData.url)

const login = new LoginPage(page)
await login.username.fill(loginData.username)
await login.password.fill(loginData.password)
await login.loginBtn.click()
})