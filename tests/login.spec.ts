import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'

test.describe('Testes de Login', () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.goto()
        await loginPage.checkPage()
    })

    test('Login com sucesso', async ({ page }) => {
        await loginPage.fillForm('teste@teste.com', 'teste@123')
        await loginPage.clickButton()
        await expect(page.locator('#welcome-message')).toHaveText('Seja Bem-Vindo!')
    })

    test('Nao deve logar quando e-mail errado', async ({ page }) => {
        await loginPage.fillForm('teste@testes.com', 'teste@123')
        await loginPage.clickButton()
        await expect(page.locator(' #login-main-error')).toHaveText('E-mail ou senha incorretos.')
    })

    test('Nao deve logar quando senha errada', async ({ page }) => {
        await loginPage.fillForm('teste@teste.com', 'teste!123')
        await loginPage.clickButton()
        await expect(page.locator(' #login-main-error')).toHaveText('E-mail ou senha incorretos.')
    })

    test('Nao deve logar quando campos vazios', async ({ page }) => {
        await loginPage.fillForm('', '')
        await expect(page.locator('#login-email')).toHaveValue('');
        await expect(page.locator('#login-password')).toHaveValue('');
        await loginPage.clickButton()

        await expect(page.locator('#error-login-email')).toHaveText('O campo e-mail não pode estar vazio.')
        await expect(page.locator('#error-login-password')).toHaveText('O campo senha não pode estar vazio.')
    })

    test('Nao deve logar quando campo e-mail vazio', async ({ page }) => {
        await loginPage.fillForm('', 'test@!123')
        await expect(page.locator('#login-email')).toHaveValue('');
        await loginPage.clickButton()
        await expect(page.locator('#error-login-email')).toHaveText('O campo e-mail não pode estar vazio.')
        await expect(page.locator('#error-login-password')).not.toBeVisible();
    })

    test('Nao deve logar quando campo senha vazio', async ({ page }) => {
        await loginPage.fillForm('teste@teste.com', '')
        await expect(page.locator('#login-password')).toHaveValue('');
        await loginPage.clickButton()
        await expect(page.locator('#error-login-password')).toHaveText('O campo senha não pode estar vazio.')
        await expect(page.locator('error-login-email')).not.toBeVisible();
    })

    test('Nao deve logar quando credenciais nao cadastradas', async ({ page }) => {
        await loginPage.fillForm('bug@bug.com', 'bud@321')
        await loginPage.clickButton()
        await expect(page.locator('#login-main-error')).toHaveText('E-mail ou senha incorretos.')
    })

    test('Validando botao Criar uma conta', async({page})=>{
        await loginPage.createAccountButton()
        await expect(page.locator('#register-title')).toHaveText('Criar Conta')
        await expect(page.locator('#register-subtitle')).toHaveText('Preencha os dados para simular o cadastro')
    })
        
})