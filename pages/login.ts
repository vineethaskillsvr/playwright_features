import { expect, type Page } from '@playwright/test';

export class LoginPages 
{

    readonly page: Page;
    readonly login;
    readonly login_email;
    readonly login_password;
    readonly signinbutton;

    constructor(page: Page) 
    {
        
        this.page = page;

        
        this.login = page.getByRole('button', { name: 'Log In' });
        this.login_email = page.getByPlaceholder('Email Address');
        this.login_password = page.getByPlaceholder('Password');
        this.signinbutton = page.getByRole('button', { name: 'Sign in' });
    }

    async goto_url(url)
    {
        await this.page.goto(url);

    }

    async portal_login(pemail, pwd)
    {       
  await this.login.click();
  await this.login_email.click();
  await this.login_email.fill(pemail);
  await this.login_password.click();
  await this.login_password.fill(pwd);
  await this.signinbutton.click(); 
    }
}