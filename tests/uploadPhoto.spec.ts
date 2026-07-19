import{test, expect} from '@playwright/test'
import { UploadPhotoPage } from '../pages/uploadPhotoPage'      

test.describe('Inserir foto de perfil', ()=>{

    let uploadPhotoPage: UploadPhotoPage;

    test.beforeEach(async({page})=>{
        uploadPhotoPage = new UploadPhotoPage(page);
        await uploadPhotoPage.goto()
        await uploadPhotoPage.login()
    })

    test('Deve realizar upload com sucesso', async ({page})=>{
        await uploadPhotoPage.documentCenter()
    })
})