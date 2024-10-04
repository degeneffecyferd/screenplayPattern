import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

import Actor from '../pageobjects/actor/Actor';
import Login from '../pageobjects/tasks/Login';
import Message from '../pageobjects/questions/Message';
const actor = new Actor('Tester');

const pages = {
    login: LoginPage
}

/*Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});*/

Given(/^I am on the (\w+) page with actor$/, async (page) => {
    // Crear un actor que realizará las acciones

    // Navegar a la página de inicio de sesión
    await browser.url('https://the-internet.herokuapp.com/login');
});

When(/^I login with actor with (\w+) and (.+)$/, async (username, password) => {
    // El actor intenta realizar la tarea de inicio de sesión con credenciales inválidas

    await actor.attemptsTo(
        await Login.withCredentials(username, password)
    );
    //await browser.pause(5000)
    //console.log(await actor.asks(await Message.displayed()))

});

Then(/^I should see with actor a flash message saying (.*)$/, async (message) => {
    //await expect(await actor.asks(await Message.displayed())).toBeExisting();
    console.log(await actor.asks(await Message.displayed()))
    
    await expect(await actor.asks(await Message.displayed())).toContain(message);
});

