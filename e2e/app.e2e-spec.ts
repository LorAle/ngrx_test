import { NgrxTestProjectPage } from './app.po';

describe('ngrx-test-project App', () => {
  let page: NgrxTestProjectPage;

  beforeEach(() => {
    page = new NgrxTestProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to book!');
  });
});
