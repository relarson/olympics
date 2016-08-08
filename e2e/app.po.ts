export class OlympicsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('olympics-app h1')).getText();
  }
}
