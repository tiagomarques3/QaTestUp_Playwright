import { Page, expect } from '@playwright/test'

export class UploadPhotoPage {
    readonly page: Page;
    static readonly BASE_URL = 'file:///C:/Projects/QaTestUp/index.html'

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(UploadPhotoPage.BASE_URL, { waitUntil: 'domcontentloaded' })
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

    async documentCenter() {
        const tituloCentral = this.page.locator('.upload-section .upload-section-title');
        await expect(tituloCentral).toHaveText('Central de Documentos do Usuário');

        const fileUpload = this.page.locator('#upload-avatar');
        await expect(fileUpload).toBeVisible();
        await this.page.locator('#upload-avatar').setInputFiles('fixtures/avatar.png');

        await expect(this.page.locator('#avatar-success-msg')).toHaveText('✓ Foto de perfil atualizada!')
        await expect(this.page.locator('#welcome-avatar img')).toBeVisible();


    }

}