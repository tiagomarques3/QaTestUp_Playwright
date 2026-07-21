import { Page, expect } from '@playwright/test'

export class LoginPage {
    readonly page: Page;
    static readonly BASE_URL = 'file:///C:/Projects/QaTestUp/index.html'

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
         await this.page.goto(LoginPage.BASE_URL, { waitUntil: 'networkidle' });
    }

    async checkPage() {
        await this.page.waitForSelector('#login-title', { state: 'visible' })
        await expect(this.page.locator('#login-title')).toHaveText('Seja Bem-Vindo ao QA TestUp')
    }

    async fillForm(email: string, password: string) {
        await this.page.locator('#login-email').fill(email)
        await this.page.locator('#login-password').fill(password)
    }

    async clickButton(){
        await this.page.locator('#btn-login-submit').click()
    }

    async createAccountButton(){
        await this.page.waitForSelector('#btn-go-to-register', {state: 'visible'})
        await this.page.locator('#btn-go-to-register').click()
    }
}