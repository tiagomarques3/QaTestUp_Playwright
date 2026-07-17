import { test, expect } from '@playwright/test'
import { RegisterPage } from '../pages/registerPage'

test.describe('Teste de cadastro de novo usuario', () => {
    let registerPage: RegisterPage;

    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page)
        await registerPage.accessRegistrationForm()
    })

    test('Deve cadastrar novo usuario com sucesso', async ({ page }) => {
        await registerPage.fillForm('Janbug', 'Play', '12365478993', '74999999999', 'jan@play.com', 'jan2026@')
        await expect(page.locator('div[style="display: block;"]')).toHaveText('Cadastro realizado com sucesso! Insira suas credenciais.')
    })

    test('Deve cadastrar novo usuario quando preencher apenas campos obrigatorios', async ({ page }) => {
        await registerPage.fillForm('Janbug', '', '', '', 'jan@play.com', 'jan2026@')
        await expect(page.locator('#reg-last-name')).toHaveValue('');
        await expect(page.locator('#reg-cpf')).toHaveValue('');
        await expect(page.locator('#reg-phone')).toHaveValue('');
        await expect(page.locator('div[style="display: block;"]')).toHaveText('Cadastro realizado com sucesso! Insira suas credenciais.')
    })


    test('Nao deve cadastrar novo usuario quando campos obrigatorios vazios', async ({ page }) => {
        await registerPage.fillForm('', 'Play', '12365478993', '74999999999', '', '')
        await expect(page.locator('#reg-first-name')).toHaveValue('');
        await expect(page.locator('#reg-email')).toHaveValue('');
        await expect(page.locator('#reg-password')).toHaveValue('');

        await expect(page.locator('#error-reg-name')).toHaveText('O nome é obrigatório.')
        await expect(page.locator('#error-reg-email')).toHaveText('Insira um e-mail válido.')
        await expect(page.locator('#error-reg-password')).toHaveText('A senha não cumpre os requisitos mínimos de segurança.')
    })

    test('Nao deve cadastrar quando e-mail com formato invalido', async ({ page }) => {
        await registerPage.fillForm('Janbug', 'Play', '12365478993', '74999999999', 'janplay.com', 'jan2026@')
        await expect(page.locator('#error-reg-email')).toHaveText('Insira um e-mail válido.')
    })


    test('Nao deve cadastrar quando senha com formato invalido', async ({ page }) => {
        await registerPage.fillForm('Janbug', 'Play', '12365478993', '74999999999', 'jan@play.com', 'janjan25')
        await expect(page.locator('#error-reg-password')).toHaveText('A senha não cumpre os requisitos mínimos de segurança.')
    })

    test('Nao deve cadastrar novo usuario quando senha curta', async({page})=>{
         await registerPage.fillForm('Janbug', 'Play', '12365478993', '74999999999', 'jan@play.com', 'jan25@')
        await expect(page.locator('#error-reg-password')).toHaveText('A senha não cumpre os requisitos mínimos de segurança.')
    })




})