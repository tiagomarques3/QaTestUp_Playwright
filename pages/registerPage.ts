import { Page, expect } from '@playwright/test'

export class RegisterPage {
    readonly page: Page;
    static readonly BASE_URL = 'file:///C:/Projects/QaTestUp/index.html'

    constructor(page: Page) {
        this.page = page;
    }

    async accessRegistrationForm() {
        await this.page.goto(RegisterPage.BASE_URL, { waitUntil: 'networkidle' })
        await this.page.waitForSelector('#btn-go-to-register', { state: 'visible' })
        await this.page.locator('#btn-go-to-register').click()
        await expect(this.page.locator('#register-title')).toHaveText('Criar Conta')
        await expect(this.page.locator('#register-subtitle')).toHaveText('Preencha os dados para simular o cadastro')
    }

    async fillForm(name: string, surname: string, cpf: string, phone: string, email: string, password: string) {
        await this.page.locator('#reg-first-name').fill(name)
        await this.page.locator('#reg-last-name').fill(surname)
        await this.page.locator('#reg-cpf').fill(cpf)
        await this.page.locator('#reg-phone').fill(phone)
        await this.page.locator('#reg-email').fill(email)
        await this.page.locator('#reg-password').fill(password)

        await this.page.locator('#btn-register-submit').click()
    }

    async buttonBackLogin() {
        await this.page.waitForSelector('#btn-back-to-login', { state: 'visible' })
        await this.page.locator('#btn-back-to-login').click()
        await this.page.waitForSelector('#login-title', { state: 'visible' })
        await expect(this.page.locator('#login-title')).toHaveText('Seja Bem-Vindo ao QA TestUp')
    }


}



