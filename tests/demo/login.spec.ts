import { test, expect } from '@playwright/test';
import {LoginPages} from '../../pages/login.js';


test('test', async ({ page }) => {

  
  
   const Login= new LoginPages(page);

   await Login.goto_url('https://app.skillsvr.com/auth/login?region=au');
   await Login.portal_login('vineetha+admin+qaau+prod@skillsvr.com','Skills123*')
   await page.getByText('Users', { exact: true }).click();


});