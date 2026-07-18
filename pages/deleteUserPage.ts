import { Page, expect } from '@playwright/test'

export class DeleteUserPage {
    readonly page: Page;
    static readonly BASE_URL = 'file:///C:/Projects/QaTestUp/index.html'

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(DeleteUserPage.BASE_URL, { waitUntil: 'networkidle' })
        await this.page.waitForSelector('#login-title', { state: 'visible' })
        await expect(this.page.locator('#login-title')).toHaveText('Seja Bem-Vindo ao QA TestUp')
    }

    async createUser() {
        await this.page.waitForSelector('#btn-go-to-register', { state: 'visible' })
        await this.page.locator('#btn-go-to-register').click()

        await expect(this.page.locator('#register-title')).toHaveText('Criar Conta')
        await expect(this.page.locator('#register-subtitle')).toHaveText('Preencha os dados para simular o cadastro')

        await this.page.locator('#reg-first-name').fill('Jude')
        await this.page.locator('#reg-last-name').fill('Messi')
        await this.page.locator('#reg-email').fill('jude@testup.com')
        await this.page.locator('#reg-password').fill('jude@123')
        await this.page.locator('#btn-register-submit').click()
        await expect(this.page.locator('div[style="display: block;"]')).toHaveText('Cadastro realizado com sucesso! Insira suas credenciais.')
    }

    async acessAcount() {

        await this.page.locator('#login-email').fill('teste@teste.com')
        await this.page.locator('#login-password').fill('teste@123')
        await this.page.locator('#btn-login-submit').click()

        await expect(this.page.locator('#welcome-message')).toHaveText('Seja Bem-Vindo!')
        await expect(this.page.locator('#welcome-logged-user')).toHaveText('QA Engineer')
    }

    async deleteUser() {

        const userEmail = this.page.locator('.user-email', {
            hasText: 'jude@testup.com'
        });

        if (await userEmail.isVisible()) {
            await this.page.locator('#btn-delete-jude-testup-com').click();
            await expect(this.page.locator('#modal-confirm-title'))
                .toHaveText('Atenção');
            await expect(this.page.locator('#modal-confirm-text'))
                .toHaveText('Deseja mesmo excluir este usuário?');
            await this.page.locator('#btn-modal-confirm-yes').click();
            await expect(this.page.locator('#toast-success'))
                .toHaveText('Usuário excluído com sucesso!');
            await expect(this.page.locator('.user-email', { hasText: 'jude@testup.com' })).not.toBeVisible();


        } else {
            console.log('Usuário jude@testup.com não encontrado. Exclusão ignorada.');
        }
    }

    async noDelete() {
        const userEmail = this.page.locator('.user-email', {
            hasText: 'jude@testup.com'
        });

        if (await userEmail.isVisible()) {
            await this.page.locator('#btn-delete-jude-testup-com').click();
            await expect(this.page.locator('#modal-confirm-title'))
                .toHaveText('Atenção');
            await expect(this.page.locator('#modal-confirm-text'))
                .toHaveText('Deseja mesmo excluir este usuário?');
            await this.page.locator('#btn-modal-confirm-no').click()
            await expect(this.page.locator('#welcome-message')).toHaveText('Seja Bem-Vindo!')
            await expect(this.page.locator('#welcome-logged-user')).toHaveText('QA Engineer')

            await expect(this.page.locator('.user-email', { hasText: 'jude@testup.com' })).toBeVisible();

        } else {
            console.log('Usuário jude@testup.com não encontrado. Exclusão ignorada.');
        }

    }

}


//7 - validar nao exclusao no modal