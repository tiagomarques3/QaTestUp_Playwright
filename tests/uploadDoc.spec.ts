import{test}from '@playwright/test'
import { UploadDocPage } from '../pages/uploadDocPage'  

test.describe('Testes upload de documentos', ()=>{

    let uploadDocPage: UploadDocPage;

    test.beforeEach(async({page})=>{
        uploadDocPage = new UploadDocPage(page)
        await uploadDocPage.goto()
        await uploadDocPage.login()
    })

    test('Deve fazer upload de documento', async({page})=>{
        await uploadDocPage.docCenter()
    })


})