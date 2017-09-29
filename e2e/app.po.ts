import { browser, by, element } from 'protractor';

export class NgrxTestProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('book-root h1')).getText();
  }
}
