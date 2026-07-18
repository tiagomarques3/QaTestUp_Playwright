import { test, expect } from '@playwright/test'
import { DeleteUserPage } from '../pages/deleteUserPage'

test.describe('Testes excluir usuários', () => {

    let deleteUserPage: DeleteUserPage;

    test.beforeEach(async ({ page }) => {
        deleteUserPage = new DeleteUserPage(page);
        await deleteUserPage.goto()
        await deleteUserPage.createUser()
        await deleteUserPage.acessAcount()
    })

    test('Deve deletar usuario com sucesso', async ({page})=>{
        await deleteUserPage.deleteUser()
    })

    test('Nao deve deletar quando clicar em Nao do modal de exclusao', async ({page})=>{
        await deleteUserPage.noDelete()
    })


})
