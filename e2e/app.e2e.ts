import { OlympicsPage } from './app.po';

describe('olympics App', function() {
  let page: OlympicsPage;

  beforeEach(() => {
    page = new OlympicsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('olympics works!');
  });
});
