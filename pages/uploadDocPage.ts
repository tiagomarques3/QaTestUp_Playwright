import { Page, expect } from '@playwright/test'


export class UploadDocPage {
    readonly page: Page;
    static readonly BASE_URL = 'http://127.0.0.1:3000'

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/');
        await this.page.waitForSelector('#login-title', { state: 'visible' })
        await expect(this.page.locator('#login-title')).toHaveText('Seja Bem-Vindo ao QA TestUp')
    }

    async login() {
        await this.page.locator('#login-email').fill('teste@teste.com')
        await this.page.locator('#login-password').fill('teste@123')
        await this.page.locator('#btn-login-submit').click()
        await expect(this.page.locator('#welcome-message')).toHaveText('Seja Bem-Vindo!')
        await expect(this.page.locator('#welcome-logged-user')).toHaveText('QA Engineer')


    }

    async docCenter() {
        const tituloCentral = this.page.locator('.upload-section .upload-section-title');
        await expect(tituloCentral).toHaveText('Central de Documentos do Usuário');

        const fileDocUpload = this.page.locator('#upload-resume');
        await expect(fileDocUpload).toBeVisible();
        await this.page.locator('#upload-resume').setInputFiles('fixtures/example.pdf');

        await expect(this.page.locator('#resume-success-msg')).toHaveText('✓ Currículo anexado com sucesso!')
    }


}